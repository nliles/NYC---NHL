import { useState } from "react";
import "./App.css";
import Portal from "./components/Portal";
import SidePanel from "./components/SidePanel";
import Map from "./screens/Map";
import ParkProfile from "./components/ParkProfile";

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState();

  return (
    <>
      <div>
        <Portal containerId="portal-root">
          {selectedLocation && (
            <SidePanel
              isOpen={true}
              onClose={() => setSelectedLocation(undefined)}
            >
              <ParkProfile landmark={selectedLocation} />
            </SidePanel>
          )}
        </Portal>
      </div>
      <Map setSelectedLocation={setSelectedLocation} />
    </>
  );
};

export default App;
