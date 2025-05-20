import { useState } from "react";
import "./App.css";
import Portal from "./components/Portal";
import SidePanel from "./components/SidePanel";
import Map from "./screens/Map";
import ParkProfile from "./components/LandmarkProfile";

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState();
  const [visitedLandmarks, setVisitedLandmarks] = useState(() => {
    const storedLandmarks = localStorage.getItem("visitedLandmarks");
    return storedLandmarks ? JSON.parse(storedLandmarks) : [];
  });

  return (
    <>
      <div>
        <Portal containerId="portal-root">
          {selectedLocation && (
            <SidePanel
              isOpen={true}
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
      <Map
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        visitedLandmarks={visitedLandmarks}
      />
    </>
  );
};

export default App;
