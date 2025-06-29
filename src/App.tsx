import { useEffect, useState } from "react";
import "./App.css";
import Portal from "./components/Portal";
import SidePanel from "./components/SidePanel";
import Map from "./components/Map";
import LandmarkList from "./components/LandmarkList";
import LandmarkProfile from "./components/LandmarkProfile";
import { getLocalStorage } from "./helpers/localStorage";
import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import { getLandmarks } from "./services/contentful";
import About from "./components/About";
import { Landmark } from "./types";

const App = () => {
  const [landmarks, setLandmarks] = useState<Landmark[]>([]);
  const [selectedLocation, setSelectedLocation] = useState();
  const [showAbout, setShowAbout] = useState(false);
  const [shouldZoom, setShouldZoom] = useState(false);
  const [visitedLandmarks, setVisitedLandmarks] = useState(() =>
    getLocalStorage(),
  );

  const handleClick = (item: any) => {
    setSelectedLocation({
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
        setLandmarks(response.items as any);
      } catch (error) {
        console.error("Error fetching content:", error);
        return [];
      }
    };

    fetchLandmarks();
  }, []);

  const handleClose = () => {
    setSelectedLocation(undefined);
    setShowAbout(false);
  };

  return (
    <>
      <NavBar
        count={visitedLandmarks.length}
        total={116}
        toggleAbout={() => setShowAbout(true)}
      />
      <div className={styles.container}>
        <LandmarkList handleClick={handleClick} landmarks={landmarks} />
        <Map
          landmarks={landmarks}
          selectedLocation={selectedLocation}
          setSelectedLandmark={setSelectedLocation}
          visitedLandmarks={visitedLandmarks}
          shouldZoom={shouldZoom}
          setShouldZoom={setShouldZoom}
        />
      </div>
      <div>
        <Portal containerId="portal-root">
          {(selectedLocation || showAbout) && (
            <SidePanel onClose={handleClose}>
              {selectedLocation ? (
                <LandmarkProfile
                  landmark={selectedLocation}
                  setVisitedLandmarks={setVisitedLandmarks}
                  visitedLandmarks={visitedLandmarks}
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
