import { useEffect, useState } from "react";
import "./App.css";
import Portal from "./components/Portal";
import SidePanel from "./components/SidePanel";
import Map from "./components/Map";
import LandmarkList from "./components/LandmarkList";
import LandmarkProfile from "./components/LandmarkProfile";
import { getLocalStorage, saveToStorage } from "./helpers/localStorage";
import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import { getLandmarks } from "./services/contentful";
import About from "./components/About";
import { Landmark, SelectedLandmark } from "./types";

const App = () => {
  const [landmarks, setLandmarks] = useState<Landmark[]>([]);
  const [selectedLandmark, setSelectedLandmark] = useState<SelectedLandmark>();
  const [showAbout, setShowAbout] = useState(false);
  const [shouldZoom, setShouldZoom] = useState(false);
  const [visitedLandmarks, setVisitedLandmarks] = useState(() =>
    getLocalStorage(),
  );

  const handleClick = (item: Landmark) => {
    setSelectedLandmark({
      ...item.fields,
      image: item.fields.image.fields.file.url,
      imageTitle: item.fields.image.fields.title,
      imageDescription: item.fields.image.fields.description,
    });
    setShouldZoom(true);
  };

  useEffect(() => {
    const fetchLandmarks = async () => {
      try {
        const response = await getLandmarks();
        console.log("Fetched landmarks:", response);
        setLandmarks(response.items as any);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchLandmarks();
  }, []);

  const handleClose = () => {
    setSelectedLandmark(undefined);
    setShowAbout(false);
  };

  const onVisitedChange = (isVisited: boolean) => {
    // Save to localStorage
    if (isVisited) {
      setVisitedLandmarks([...visitedLandmarks, selectedLandmark?.name]);
      saveToStorage([...visitedLandmarks, selectedLandmark?.name]);
    } else {
      const filtered = visitedLandmarks.filter(
        (name: string) => name !== selectedLandmark?.name,
      );
      setVisitedLandmarks(filtered);
      saveToStorage(filtered);
    }
  };

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
          selectedLandmark={selectedLandmark}
        />
        <Map
          landmarks={landmarks}
          selectedLandmark={selectedLandmark}
          setSelectedLandmark={setSelectedLandmark}
          visitedLandmarks={visitedLandmarks}
          shouldZoom={shouldZoom}
          setShouldZoom={setShouldZoom}
        />
      </div>
      <div>
        <Portal containerId="portal-root">
          {(selectedLandmark || showAbout) && (
            <SidePanel onClose={handleClose}>
              {selectedLandmark ? (
                <LandmarkProfile
                  landmark={selectedLandmark}
                  isVisited={visitedLandmarks.includes(
                    selectedLandmark?.name || "",
                  )}
                  onChange={onVisitedChange}
                />
              ) : (
                <About />
              )}
            </SidePanel>
          )}
        </Portal>
      </div>
    </>
  );
};

export default App;
