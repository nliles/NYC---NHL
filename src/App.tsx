import { useEffect, useState } from "react";
import "./App.css";
import Portal from "./components/Portal";
import SidePanel from "./components/SidePanel";
import Map from "./screens/Map";
import landmarks from "./screens/Map/data.ts";
import ParkProfile from "./components/LandmarkProfile";
import NavBar from "./components/NavBar";
import styles from './App.module.css';

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState();
  const [visitedLandmarks, setVisitedLandmarks] = useState(() => {
    try {
      const storedLandmarks = localStorage.getItem("visitedLandmarks");
      return storedLandmarks ? JSON.parse(storedLandmarks) : [];
    } catch (error) {
      console.warn("Failed to load visited landmarks from localStorage:", error);
      return [];
    }
  });

  // Save to localStorage whenever visitedLandmarks changes
  useEffect(() => {
    try {
      localStorage.setItem("visitedLandmarks", JSON.stringify(visitedLandmarks));
    } catch (error) {
      console.warn("Failed to save visited landmarks to localStorage:", error);
    }
  }, [visitedLandmarks]);

  const handleClick = (item: any) => {
   setSelectedLocation(item.properties)
  }

  return (
    <>
      <NavBar count={visitedLandmarks.length} total={116} />
      <div className={styles.container}>
        <div className={styles.leftPanel}>
            <div className={styles.panelHeader}>
                <div className={styles.searchContainer}>
                    <input type="text" className={styles.searchInput} placeholder="Search landmarks..." id="searchInput"/>
                    <div className={styles.searchIcon}>🔍</div>
                </div>
            </div>
            <div className={styles.resultsCount} id="resultsCount">Showing 97 of 116 landmarks</div>
                <div className={styles.landmarksList}>
                  {landmarks.map((landmark) => (
                    <button className={styles.item} onClick={() => handleClick(landmark)} key={landmark.properties.id}>
                        <div className={styles.landmarkName}>{landmark.properties.name}</div>
                        <div className={styles.landmarkDetails}>Manhattan • <span className={styles.landmarkYear}>1884</span></div>
                    </button>
                    ))
                  }
                </div>
        </div>
      <Map
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        visitedLandmarks={visitedLandmarks}
      />
      </div>
      <div>
        <Portal containerId="portal-root">
          {selectedLocation && (
            <SidePanel
              onClose={() => setSelectedLocation(undefined)}
            >
              <ParkProfile
                landmark={selectedLocation}
                setVisitedLandmarks={setVisitedLandmarks}
                visitedLandmarks={visitedLandmarks}
              />
            </SidePanel>
          )}
        </Portal>
      </div>
    </>
  );
};

export default App;
