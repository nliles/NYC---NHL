import { useEffect, useState } from "react";
import "./App.css";
import Portal from "./components/Portal";
import SidePanel from "./components/SidePanel";
import Map from "./screens/Map";
import ParkProfile from "./components/LandmarkProfile";
import NavBar from "./components/NavBar";

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

  return (
    <>
      <NavBar count={visitedLandmarks.length} total={116} />
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
      <Map
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        visitedLandmarks={visitedLandmarks}
      />
    </>
  );
};

export default App;
