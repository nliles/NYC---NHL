import { useEffect, useRef, useState } from "react";
import "./App.css";
import Portal from "./components/Portal";
import SidePanel from "./components/SidePanel";
import Map from "./screens/Map";
import LandmarkList from "./components/LandmarkList";
import ParkProfile from "./components/LandmarkProfile";
import { getLocalStorage } from "./helpers/localStorage";
import NavBar from "./components/NavBar";
import styles from "./App.module.css";

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState();
  const [shouldZoom, setShouldZoom] = useState(false);
  const [visitedLandmarks, setVisitedLandmarks] = useState(() =>
    getLocalStorage(),
  );

  const handleClick = (item: any) => {
    setSelectedLocation(item.properties);
    setShouldZoom(true);
  };

  return (
    <>
      <NavBar count={visitedLandmarks.length} total={116} />
      <div className={styles.container}>
        <LandmarkList handleClick={handleClick} />
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
