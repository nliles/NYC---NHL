// In your React component
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

  // Convert DMS coordinates to decimal degrees
  function dmsToDecimal(dms: any) {
    return [dms.lng, dms.lat]; // GeoJSON uses [longitude, latitude]
  }

  useEffect(() => {
    if (mapboxgl && !mapInstance.current) {
      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
      // "pk.eyJ1Ijoibm1saWxlczE2IiwiYSI6ImNtYW44dGR6MDBybnMyam9iYWNwdGM4MGsifQ.b0_OYdIxyitezCgWIR25sg";

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/nmliles16/cmauev02t00li01r2c9lg9fi8",
        center: [-74.0199, 40.7528], // NYC coordinates
        zoom: 12,
      });

      mapInstance.current = map;

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
              "#E63946", // Color if ID is in storedLandmarks (visited)
              "#8BC34A", // Color if not in storedLandmarks (not visited)
            ],
            "circle-stroke-width": 2,
            "circle-stroke-color": "#ffffff",
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
            "text-color": "#333",
            "text-halo-color": "#fff",
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
        "#E63946", // visited - red
        "#8BC34A", // not visited - green
      ]);
      mapInstance.current.setPaintProperty(
        "landmark-points",
        "circle-stroke-color", // This is the "halo" property for points
        [
          "case",
          ["==", ["get", "id"], selectedLocation?.id || null], // Check if this point is selected
          "#ff0000", // Use this color for the selected point's halo (red in this example)
          "#ffffff", // Default halo color for unselected points (white)
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
