import { useState } from "react";
import "./App.css";
import Portal from "./components/Portal";
import SidePanel from "./components/SidePanel";
import Map from "./components/Map";
import LandmarkList from "./components/LandmarkList";
import LandmarkProfile from "./components/LandmarkProfile";
import { getLocalStorage, saveToStorage } from "./helpers/localStorage";
import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import About from "./components/About";
import { LandmarkSkeleton } from "./types";
import { Entry } from "contentful";
import { useLandmarks } from "./hooks/useLandmarks";

const App = () => {
  const [selectedLandmarkId, setSelectedLandmarkId] = useState<string>();
  const [showAbout, setShowAbout] = useState(false);
  const [shouldZoom, setShouldZoom] = useState(false);
  const [visitedLandmarks, setVisitedLandmarks] = useState(() =>
    getLocalStorage(),
  );
  const { landmarks } = useLandmarks();
  const selectedLandmark = landmarks.find(
    (landmark) => landmark.id === selectedLandmarkId,
  );

  const handleClick = (landmarkId: string) => {
    setSelectedLandmarkId(landmarkId);
    setShouldZoom(true);
  };

  const handleClose = () => {
    setSelectedLandmarkId(undefined);
    setShowAbout(false);
  };

  const onVisitedChange = (isVisited: boolean) => {
    // Save to localStorage
    if (isVisited) {
      setVisitedLandmarks([...visitedLandmarks, selectedLandmarkId]);
      saveToStorage([...visitedLandmarks, selectedLandmarkId]);
    } else {
      const filtered = visitedLandmarks.filter(
        (id: string) => id !== selectedLandmarkId,
      );
      setVisitedLandmarks(filtered);
      saveToStorage(filtered);
    }
  };

  console.log(selectedLandmarkId);

  return (
    <>
      <NavBar
        count={visitedLandmarks.length}
        total={landmarks.length}
        toggleAbout={() => setShowAbout(true)}
      />
      <div className={styles.container}>
        <LandmarkList
          handleClick={handleClick}
          landmarks={landmarks}
          selectedLandmarkId={selectedLandmarkId}
        />
        <Map
          landmarks={landmarks}
          selectedLandmark={selectedLandmark}
          setSelectedLandmarkId={setSelectedLandmarkId}
          visitedLandmarks={visitedLandmarks}
          shouldZoom={shouldZoom}
          setShouldZoom={setShouldZoom}
        />
      </div>
      <div>
        <Portal containerId="portal-root">
          {showAbout && (
            <SidePanel onClose={handleClose}>
              <About />
            </SidePanel>
          )}
          {selectedLandmark && (
            <SidePanel onClose={handleClose}>
              <LandmarkProfile
                selectedLandmark={selectedLandmark}
                isVisited={visitedLandmarks.includes(selectedLandmark.id)}
                onChange={onVisitedChange}
              />
            </SidePanel>
          )}
        </Portal>
      </div>
    </>
  );
};

export default App;
