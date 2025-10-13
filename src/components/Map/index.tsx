import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import styles from "./Map.module.css";
import colors from "@/styles/colors.module.scss";
import { Landmark } from "@/types";
import convertToMapboxFeature from "@/helpers/convertToMapboxFeature";

const Map = ({
  landmarks,
  selectedLandmark,
  setSelectedLandmarkId,
  visitedLandmarks,
  shouldZoom,
  setShouldZoom,
}: {
  landmarks: Landmark[];
  selectedLandmark?: Landmark;
  setSelectedLandmarkId: Dispatch<SetStateAction<string | undefined>>;
  visitedLandmarks: string[];
  shouldZoom?: boolean;
  setShouldZoom?: (value: boolean) => void;
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapboxgl && !mapInstance.current && landmarks) {
      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

      const map = new mapboxgl.Map({
        container: mapContainer.current as HTMLDivElement,
        style: "mapbox://styles/nmliles16/cmb4gmtey00bh01qv7evy8qr0",
        center: [-73.9699, 40.7528],
        zoom: 12,
        minZoom: 9.5,
      });

      mapInstance.current = map;

      map.on("load", () => {
        // Convert landmarks to GeoJSON
        const geojson: GeoJSON.FeatureCollection = {
          type: "FeatureCollection",
          features: landmarks.map((landmark) =>
            convertToMapboxFeature(landmark),
          ),
        };

        // Add landmarks as a source
        map.addSource("landmarks", {
          type: "geojson",
          data: geojson,
        });

        // Add a circle layer for the landmarks
        map.addLayer({
          id: "landmark-points",
          type: "circle",
          source: "landmarks",
          paint: {
            "circle-radius": 8,
            "circle-color": [
              "case",
              ["in", ["get", "id"], ["literal", visitedLandmarks || []]],
              colors.grayBlue, // visited
              colors.gray, // not visited
            ],
            "circle-stroke-width": 2,
            "circle-stroke-color": colors.cream,
          },
        });

        // Add a text layer for landmark names
        map.addLayer({
          id: "landmark-labels",
          type: "symbol",
          source: "landmarks",
          layout: {
            "text-field": ["get", "name"],
            "text-size": 12,
            "text-offset": [0, 1.5],
            "text-anchor": "top",
          },
          paint: {
            "text-color": colors.vintageBrown,
            "text-halo-color": colors.cream,
            "text-halo-width": 1,
          },
        });

        // Add popups on click
        map.on("click", "landmark-points", (e) => {
          setSelectedLandmarkId(e?.features?.[0]?.properties?.id);
        });

        // Change cursor to pointer when hovering landmarks
        map.on("mouseenter", "landmark-points", () => {
          map.getCanvas().style.cursor = "pointer";
        });

        map.on("mouseleave", "landmark-points", () => {
          map.getCanvas().style.cursor = "";
        });
      });
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [setSelectedLandmarkId, landmarks]);

  // EFFECT 2: Update colors when visitedLandmarks changes
  useEffect(() => {
    if (
      mapInstance.current &&
      mapInstance.current.isStyleLoaded() &&
      mapInstance.current.getLayer("landmark-points")
    ) {
      mapInstance.current.setPaintProperty("landmark-points", "circle-color", [
        "case",
        ["in", ["get", "id"], ["literal", visitedLandmarks || []]],
        colors.grayBlue, // visited
        colors.gray, // not visited
      ]);
      mapInstance.current.setPaintProperty(
        "landmark-points",
        "circle-stroke-color",
        [
          "case",
          ["==", ["get", "id"], selectedLandmark?.id || null],
          colors.golden, // Highlighted outline for selected point
          colors.cream, // Default outline
        ],
      );
    }
  }, [visitedLandmarks, selectedLandmark]);

  useEffect(() => {
    if (selectedLandmark && shouldZoom && mapInstance.current) {
      mapInstance.current.flyTo({
        center: [
          selectedLandmark?.location?.lon,
          selectedLandmark?.location?.lat,
        ],
        essential: true,
        zoom: 13,
      });
      setShouldZoom?.(false); // Reset zoom state after flying
    }
  }, [selectedLandmark, shouldZoom, setShouldZoom]);

  return (
    <div className={styles.container}>
      <div ref={mapContainer} style={{ height: "100vh", width: "100%" }} />
    </div>
  );
};

export default Map;
