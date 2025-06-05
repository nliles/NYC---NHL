import { useEffect, useState } from "react";
import "./App.css";
import Portal from "./components/Portal";
import SidePanel from "./components/SidePanel";
import Map from "./screens/Map";
import LandmarkList from "./components/LandmarkList";
import ParkProfile from "./components/LandmarkProfile";
import { getLocalStorage } from "./helpers/localStorage";
import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import { getLandmarks } from "./services/contentful";
import convertToMapboxFeature from "./helpers/convertToMapboxFeature";
import { Landmark } from "./types";

const App = () => {
  const [landmarks, setSelectedLandmarks] = useState<Landmark[]>([]);
  const [selectedLocation, setSelectedLocation] = useState();
  const [shouldZoom, setShouldZoom] = useState(false);
  const [visitedLandmarks, setVisitedLandmarks] = useState(() =>
    getLocalStorage(),
  );

  const handleClick = (item: any) => {
    setSelectedLocation(item.fields);
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

  console.log('here', landmarks)

  const mapData = landmarks.map(landmark => convertToMapboxFeature(landmark))

  return (
    <>
      <NavBar count={visitedLandmarks.length} total={116} />
      <div className={styles.container}>
        <LandmarkList handleClick={handleClick} landmarks={landmarks}/>
        <Map
          landmarks={mapData}
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
