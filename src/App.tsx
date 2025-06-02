import { useEffect, useRef, useState } from "react";
import "./App.css";
import Portal from "./components/Portal";
import SidePanel from "./components/SidePanel";
import Map from "./screens/Map";
import landmarks from "./screens/Map/data.ts";
import ParkProfile from "./components/LandmarkProfile";
import { getLocalStorage } from "./helpers/localStorage";
import NavBar from "./components/NavBar";
import styles from "./App.module.css";

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState();
  const [shouldZoom, setShouldZoom] = useState(false);
  const [filteredLandmarks, setFilteredLandmarks] = useState(landmarks);
  const [visitedLandmarks, setVisitedLandmarks] = useState(() =>
    getLocalStorage(),
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (item: any) => {
    setSelectedLocation(item.properties);
    setShouldZoom(true);
  };

  const handleOnChange = () => {
    const searchTerm = inputRef.current?.value?.toLowerCase() || "";

    if (searchTerm === "") {
      // If search is empty, show all landmarks
      setFilteredLandmarks(landmarks); // Use original landmarks array
    } else {
      // Filter from the original landmarks array, not filteredLandmarks
      const filtered = landmarks.filter((landmark) =>
        landmark.properties.name.toLowerCase().includes(searchTerm),
      );
      setFilteredLandmarks(filtered);
    }
  };

  return (
    <>
      <NavBar count={visitedLandmarks.length} total={116} />
      <div className={styles.container}>
        <div className={styles.leftPanel}>
          <div className={styles.panelHeader}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search landmarks..."
                ref={inputRef}
                onChange={handleOnChange}
              />
              <img
                className={styles.searchIcon}
                src="search.png"
                alt="Search"
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className={styles.landmarksList}>
            {filteredLandmarks.map((landmark) => (
              <button
                className={styles.item}
                onClick={() => handleClick(landmark)}
                key={landmark.properties.name}
              >
                <p className={styles.name}>{landmark.properties.name}</p>
                <div className={styles.landmarkDetails}>
                  {landmark.properties.borough.split(",").map((borough) => (
                    <span className={styles.borough}>{borough}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
        <Map
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          visitedLandmarks={visitedLandmarks}
          shouldZoom={shouldZoom}
          setShouldZoom={setShouldZoom}
        />
      </div>
      <div>
        <Portal containerId="portal-root">
          {selectedLocation && (
            <SidePanel onClose={() => setSelectedLocation(undefined)}>
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
