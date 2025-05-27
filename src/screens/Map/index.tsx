import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import landmarks from "./data.ts";
import styles from "./Map.module.css";

const Map = ({
  selectedLocation,
  setSelectedLocation,
  visitedLandmarks,
}: {
  selectedLocation: any;
  setSelectedLocation: Dispatch<SetStateAction<undefined>>;
  visitedLandmarks: string[];
}) => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapboxgl && !mapInstance.current) {
      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/nmliles16/cmb4gmtey00bh01qv7evy8qr0",
        center: [-74.0199, 40.7528], // NYC coordinates (initial, will be adjusted)
        zoom: 10,
      });

      mapInstance.current = map;

      const coord = mapInstance.current.getCenter();
      mapInstance.current.setCenter([coord.lng, coord.lat]);

      map.on("load", () => {
        // Convert landmarks to GeoJSON
        const geojson = {
          type: "FeatureCollection",
          features: landmarks,
        };

        // Add landmarks as a source
        map.addSource("landmarks", {
          type: "geojson",
          data: geojson,
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
              "#8b5a2b", // Vintage brown for visited (matches your road colors)
              "#6b8a7a", // Muted green for not visited (complements your water)
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
          setSelectedLocation(e.features[0].properties);
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
  }, [setSelectedLocation]);

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
        "#8b5a2b", // visited - vintage brown
        "#6b8a7a", // not visited - muted green
      ]);
      mapInstance.current.setPaintProperty(
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

  return (
    <div className={styles.container}>
      <div ref={mapContainer} style={{ height: "100vh", width: "100%" }} />
    </div>
  );
};

export default Map;