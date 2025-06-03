import { useRef, useState } from "react";
import landmarks from "../../data.ts";
import styles from "./LandmarkList.module.css";

const boroughs = ["All", "Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"];

const LandmarkList = ({
  handleClick,
}: {
  handleClick: (landmark: any) => void;
}) => {
  const [filteredLandmarks, setFilteredLandmarks] = useState(landmarks);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (borough?: string) => {
    let filteredLandmarks = borough === 'All' ? landmarks : landmarks.filter((landmark) => landmark.properties.borough.includes(borough || "")) || landmarks;
    const searchTerm = inputRef.current?.value?.toLowerCase() || "";

    if (searchTerm === "") {
      // If search is empty, show all landmarks
      setFilteredLandmarks(filteredLandmarks); // Use original landmarks array
    } else {
      // Filter from the original landmarks array, not filteredLandmarks
      const filtered = filteredLandmarks.filter((landmark) =>
        landmark.properties.name.toLowerCase().includes(searchTerm),
      );
      setFilteredLandmarks(filtered);
    }
  };

  const handleClearSearch = () => {
    inputRef.current!.value = "";
    handleOnChange();
  };

  return (
    <div className={styles.leftPanel}>
      <div className={styles.panelHeader}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search landmarks..."
            ref={inputRef}
            onChange={() => handleOnChange()}
          />
          {inputRef.current?.value && (
            <button onClick={handleClearSearch} className={styles.clearIcon}>
              <img src="close.png" alt="Clear search" width={10} height={10} />
            </button>
          )}
          <img
            className={styles.searchIcon}
            src="search.png"
            alt="Search"
            width={30}
            height={30}
          />
        </div>
        <div className={styles.boroughsContainer}>
        {boroughs.map((borough) => (
          <button className={styles.borough} onClick={() => handleOnChange(borough)}>{borough}</button>
        ))}
        </div>
      </div>
      <div className={styles.resultsCount} aria-label="results-count" id="resultsCount">{`Showing ${filteredLandmarks.length} of ${landmarks.length} landmarks`}</div>
      <div className={styles.landmarksList}>
        {filteredLandmarks.map((landmark) => (
          <button
            className={styles.item}
            onClick={() => handleClick(landmark)}
            key={landmark.properties.name}
          >
            <p className={styles.name}>{landmark.properties.name}</p>
            <div className={styles.landmarkDetails}>
              {landmark.properties.borough.split(",").map((borough) => (
                <span className={styles.borough}>{borough}</span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LandmarkList;
