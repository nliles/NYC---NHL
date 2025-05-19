// In your React component
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import landmarks from './data.ts';
import styles from './Map.module.css';

const Map = () => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);
  
  // Convert DMS coordinates to decimal degrees
  function dmsToDecimal(dms) {
    // Handle DMS format like 40°44′30″N 73°59′01″W
    const parts = dms.split(' ');
    
    if (parts.length !== 2) return null;
    
    function parseDMSPart(part) {
      const regex = /(\d+)°(\d+)′(\d+)″([NSEW])/;
      const match = part.match(regex);
      
      if (!match) return null;
      
      const degrees = parseInt(match[1]);
      const minutes = parseInt(match[2]);
      const seconds = parseInt(match[3]);
      const direction = match[4];
      
      let decimal = degrees + minutes/60 + seconds/3600;
      
      if (direction === 'S' || direction === 'W') {
        decimal = -decimal;
      }
      
      return decimal;
    }
    
    const lat = parseDMSPart(parts[0]);
    const lng = parseDMSPart(parts[1]);
    
    return [lng, lat]; // GeoJSON uses [longitude, latitude]
  }

  useEffect(() => {
    if (mapboxgl && !mapInstance.current) {
      mapboxgl.accessToken = 'pk.eyJ1Ijoibm1saWxlczE2IiwiYSI6ImNtYW44dGR6MDBybnMyam9iYWNwdGM4MGsifQ.b0_OYdIxyitezCgWIR25sg';
      
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/nmliles16/cmauev02t00li01r2c9lg9fi8',
        center: [-74.0199, 40.7528], // NYC coordinates
        zoom: 12
      });
      
      mapInstance.current = map;
      
      map.on('load', () => {
        // Convert landmarks to GeoJSON
        const geojson = {
          type: 'FeatureCollection',
          features: landmarks.map(landmark => {
            const coordinates = dmsToDecimal(landmark.location.coordinates);
            if (!coordinates) return null;
            
            return {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: coordinates
              },
              properties: {
                id: landmark.id,
                name: landmark.name,
                description: landmark.description,
                date: landmark.date_designated,
                county: landmark.county,
                area: landmark.location.area
              }
            };
          }).filter(feature => feature !== null)
        };

        // Add landmarks as a source
        map.addSource('landmarks', {
          type: 'geojson',
          data: geojson
        });
        
        // Add a circle layer for the landmarks
        map.addLayer({
          id: 'landmark-points',
          type: 'circle',
          source: 'landmarks',
          paint: {
            'circle-radius': 8,
            'circle-color': '#E63946',
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
          }
        });
        
        // Add a text layer for landmark names
        map.addLayer({
          id: 'landmark-labels',
          type: 'symbol',
          source: 'landmarks',
          layout: {
            'text-field': ['get', 'name'],
            'text-size': 12,
            'text-offset': [0, 1.5],
            'text-anchor': 'top'
          },
          paint: {
            'text-color': '#333',
            'text-halo-color': '#fff',
            'text-halo-width': 1
          }
        });
        
        // Add popups on click
        map.on('click', 'landmark-points', (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice();
          const { name, description, date, link } = e.features[0].properties;
          
          // Create popup HTML
          const popupContent = `
            <h3 style="margin: 0 0 8px 0; font-size: 16px;">${name}</h3>
            <a href=${link} target="_blank">${name}</a>
            <p style="margin: 0 0 6px 0; font-size: 14px;">${description}</p>
          `;
          
          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(popupContent)
            .addTo(map);
        });
        
        // Change cursor to pointer when hovering landmarks
        map.on('mouseenter', 'landmark-points', () => {
          map.getCanvas().style.cursor = 'pointer';
        });
        
        map.on('mouseleave', 'landmark-points', () => {
          map.getCanvas().style.cursor = '';
        });
      });
    }
    
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);
  
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        National Historic Landmarks
        <span className={styles.span}>of NYC</span>
      </h1>
      <div ref={mapContainer} style={{ height: '100vh', width: '75%' }}  />
    </div>
  
  )
}

export default Map;