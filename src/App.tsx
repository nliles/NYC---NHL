import { useEffect, useState } from "react";
import "./App.css";
import Portal from "./components/Portal";
import SidePanel from "./components/SidePanel";
import Map from "./screens/Map";
import LandmarkList from "./components/LandmarkList";
import LandmarkProfile from "./components/LandmarkProfile";
import { getLocalStorage } from "./helpers/localStorage";
import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import { getLandmarks } from "./services/contentful";
import { Landmark } from "./types";

const App = () => {
  const [landmarks, setSelectedLandmarks] = useState<Landmark[]>([]);
  const [selectedLocation, setSelectedLocation] = useState();
  const [shouldZoom, setShouldZoom] = useState(false);
  const [visitedLandmarks, setVisitedLandmarks] = useState(() =>
    getLocalStorage(),
  );

  const handleClick = (item: any) => {
    console.log('here', item)
    setSelectedLocation({
      ...item.fields,
      image: item.fields.image.fields.file.url,
    });
    setShouldZoom(true);
  };

  useEffect(() => {
    const fetchLandmarks = async () => {
        try {
          const response = await getLandmarks();
          setSelectedLandmarks(response.items as any);
        } catch (error) {
          console.error('Error fetching content:', error)
          return []
        }
    }
    
    fetchLandmarks();
  }, [])

  return (
    <>
      <NavBar count={visitedLandmarks.length} total={116} />
      <div className={styles.container}>
        <LandmarkList handleClick={handleClick} landmarks={landmarks}/>
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
          {selectedLocation && (
            <SidePanel onClose={() => setSelectedLocation(undefined)}>
              <LandmarkProfile
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
