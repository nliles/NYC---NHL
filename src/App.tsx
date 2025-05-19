import { useState } from "react";
import "./App.css";
import Portal from "./components/Portal";
import SidePanel from "./components/SidePanel";
import Map from "./screens/Map";
import ParkProfile from "./components/ParkProfile";

const App = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const handleOpenSidePanel = () => {
    setIsSidePanelOpen(true);
  };

  const handleCloseSidePanel = () => {
    setIsSidePanelOpen(false);
  };

  return (
    <>
      <div>
        <button onClick={handleOpenSidePanel}>Open Side Panel</button>
        <Portal containerId="portal-root">
          {isSidePanelOpen && (
            <SidePanel isOpen={isSidePanelOpen} onClose={handleCloseSidePanel}>
              <ParkProfile />
            </SidePanel>
          )}
        </Portal>
      </div>
      <Map />
    </>
  );
};

export default App;
