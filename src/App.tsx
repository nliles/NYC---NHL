import { useState } from "react";
import "./App.css";
import Portal from "./components/Portal";
import SidePanel from "./components/SidePanel";
import Map from "./screens/Map";

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
      <Map />
      <div>
        <button onClick={handleOpenSidePanel}>Open Side Panel</button>
        <Portal containerId="portal-root">
          {isSidePanelOpen && (
            <SidePanel isOpen={isSidePanelOpen} onClose={handleCloseSidePanel}>
              <h2>Side Panel Content</h2>
              <p>This is the content of the side panel.</p>
            </SidePanel>
          )}
        </Portal>
      </div>
    </>
  );
};

export default App;
