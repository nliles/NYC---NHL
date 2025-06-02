import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import landmarks from "./data.ts";
import styles from "./Map.module.css";

const Map = ({
  selectedLocation,
  setSelectedLocation,
  visitedLandmarks,
  shouldZoom,
  setShouldZoom,
}: {
  selectedLocation: any;
  setSelectedLocation: Dispatch<SetStateAction<undefined>>;
  visitedLandmarks: string[];
  shouldZoom?: boolean;
  setShouldZoom?: (value: boolean) => void;
}) => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapboxgl && !mapInstance.current) {
      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

      const map = new mapboxgl.Map({
        container: mapContainer.current as any,
        style: "mapbox://styles/nmliles16/cmb4gmtey00bh01qv7evy8qr0",
        center: [-74.0199, 40.7528], // NYC coordinates (initial, will be adjusted)
        zoom: 12,
        minZoom: 9.5,
      });

      // @ts-ignore
      mapInstance.current = map;

      const coord = (mapInstance?.current as any)?.getCenter();
      (mapInstance?.current as any)?.setCenter([coord.lng, coord.lat]);

      map.on("load", () => {
        // Convert landmarks to GeoJSON
        const geojson = {
          type: "FeatureCollection",
          features: landmarks,
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
              ["in", ["get", "id"], ["literal", visitedLandmarks || []]],
              "#2F4F4F", // visited
              "#C0C0C0", // not visited
            ],
            "circle-stroke-width": 2,
            "circle-stroke-color": "#f5f0e8", // Cream color matching your background
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
            "text-color": "#5a4d3f", // Vintage brown text
            "text-halo-color": "#f5f0e8", // Cream halo matching your background
            "text-halo-width": 1,
          },
        });

        // Add popups on click
        map.on("click", "landmark-points", (e) => {
          const props = (e?.features?.[0] as any).properties;
          setSelectedLocation({
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
  }, [setSelectedLocation]);

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
          ["in", ["get", "id"], ["literal", visitedLandmarks || []]],
          "#2F4F4F", // visited
          "#C0C0C0", // not visited
        ],
      );
      (mapInstance.current as any).setPaintProperty(
        "landmark-points",
        "circle-stroke-color",
        [
          "case",
          ["==", ["get", "id"], selectedLocation?.id || null],
          "#d4924a", // Highlighted outline for selected point
          "#f5f0e8", // Default cream outline
        ],
      );
    }
  }, [visitedLandmarks, selectedLocation]);

  useEffect(() => {
    if (selectedLocation && shouldZoom) {
      const found = landmarks.find(
        (landmark) => landmark.properties.id === selectedLocation.id,
      );
      (mapInstance?.current as any).flyTo({
        center: found?.geometry.coordinates,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
      setShouldZoom?.(false); // Reset zoom state after flying
    }
  }, [selectedLocation, shouldZoom, setShouldZoom]);

  return (
    <div className={styles.container}>
      <div ref={mapContainer} style={{ height: "100vh", width: "100%" }} />
    </div>
  );
};

export default Map;
