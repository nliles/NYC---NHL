import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import styles from "./Map.module.css";
import colors from "../../styles/colors.module.scss";
import { Landmark, SelectedLandmark } from "../../types";
import convertToMapboxFeature from "../../helpers/convertToMapboxFeature";

const Map = ({
  landmarks,
  selectedLandmark,
  setSelectedLandmark,
  visitedLandmarks,
  shouldZoom,
  setShouldZoom,
}: {
  landmarks: Landmark[];
  selectedLandmark?: SelectedLandmark;
  setSelectedLandmark: Dispatch<SetStateAction<SelectedLandmark | undefined>>;
  visitedLandmarks: string[];
  shouldZoom?: boolean;
  setShouldZoom?: (value: boolean) => void;
}) => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapboxgl && !mapInstance.current && landmarks) {
      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

      const map = new mapboxgl.Map({
        container: mapContainer.current as any,
        style: "mapbox://styles/nmliles16/cmb4gmtey00bh01qv7evy8qr0",
        center: [-73.9699, 40.7528],
        zoom: 12,
        minZoom: 9.5,
      });

      // @ts-ignore
      mapInstance.current = map;

      map.on("load", () => {
        // Convert landmarks to GeoJSON
        const geojson = {
          type: "FeatureCollection",
          features: landmarks.map((landmark) =>
            convertToMapboxFeature(landmark),
          ),
        };

        // Add landmarks as a source
        map.addSource("landmarks", {
          type: "geojson",
          data: geojson as any,
        });

        // Add a circle layer for the landmarks with vintage colors
        map.addLayer({
          id: "landmark-points",
          type: "circle",
          source: "landmarks",
          paint: {
            "circle-radius": 8,
            "circle-color": [
              "case",
              ["in", ["get", "name"], ["literal", visitedLandmarks || []]],
              colors.grayBlue, // visited
              colors.gray, // not visited
            ],
            "circle-stroke-width": 2,
            "circle-stroke-color": colors.cream,
          },
        });

        // Add a text layer for landmark names with vintage styling
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
          const props = (e?.features?.[0] as any).properties;
          setSelectedLandmark({
            ...props,
            bullets: JSON.parse(props.bullets || "[]"),
          });
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
        (mapInstance.current as any).remove();
        mapInstance.current = null;
      }
    };
  }, [setSelectedLandmark, landmarks]);

  // EFFECT 2: Update colors when visitedLandmarks changes
  useEffect(() => {
    if (
      mapInstance.current &&
      (mapInstance.current as any).isStyleLoaded() &&
      (mapInstance.current as any).getLayer("landmark-points")
    ) {
      (mapInstance.current as any).setPaintProperty(
        "landmark-points",
        "circle-color",
        [
          "case",
          ["in", ["get", "name"], ["literal", visitedLandmarks || []]],
          colors.grayBlue, // visited
          colors.gray, // not visited
        ],
      );
      (mapInstance.current as any).setPaintProperty(
        "landmark-points",
        "circle-stroke-color",
        [
          "case",
          ["==", ["get", "name"], selectedLandmark?.name || null],
          colors.golden, // Highlighted outline for selected point
          colors.cream, // Default outline
        ],
      );
    }
  }, [visitedLandmarks, selectedLandmark]);

  useEffect(() => {
    if (selectedLandmark && shouldZoom) {
      (mapInstance?.current as any).flyTo({
        center: [
          selectedLandmark?.location?.lon,
          selectedLandmark?.location?.lat,
        ],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
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
