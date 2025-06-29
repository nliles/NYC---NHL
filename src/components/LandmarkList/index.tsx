import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import styles from "./LandmarkList.module.css";
import { Landmark } from "../../types";
const boroughs = [
  "All",
  "Manhattan",
  "Brooklyn",
  "Queens",
  "The Bronx",
  "Staten Island",
];

const LandmarkList = ({
  landmarks,
  handleClick,
}: {
  landmarks: Landmark[];
  handleClick: (landmark: Landmark) => void;
}) => {
  const [filteredLandmarks, setFilteredLandmarks] = useState(landmarks);
  const [selectedBorough, setSelectedBorough] = useState("All");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFilteredLandmarks(landmarks);
  }, [landmarks]);

  const handleOnChange = () => {
    const formatString = (str: string) =>
      str.toLowerCase().replace(/[.,]/g, "").replace(/\s+/g, "");

    let filteredLandmarks =
      selectedBorough === "All"
        ? landmarks
        : landmarks.filter((landmark) =>
            landmark.fields.borough.includes(selectedBorough || ""),
          ) || landmarks;
    const searchTerm = formatString(inputRef.current?.value || "");

    if (searchTerm === "") {
      // If search is empty, show all landmarks
      setFilteredLandmarks(filteredLandmarks); // Use original landmarks array
    } else {
      // Filter from the original landmarks array, not filteredLandmarks
      const filtered = filteredLandmarks.filter((landmark) =>
        formatString(landmark.fields.name).includes(searchTerm),
      );
      setFilteredLandmarks(filtered);
    }
  };

  const handleClearSearch = () => {
    inputRef.current!.value = "";
    handleOnChange();
  };

  useEffect(() => {
    if (selectedBorough) handleOnChange();
  }, [selectedBorough]);

  const filterCopy =
    landmarks.length === filteredLandmarks.length
      ? `Showing ${landmarks.length} landmarks`
      : `Showing ${filteredLandmarks.length} of ${landmarks.length} landmarks`;

  return (
    <div className={styles.leftPanel}>
      <div className={styles.panelHeader}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search landmarks..."
            ref={inputRef}
            onChange={handleOnChange}
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
            <button
              className={cn(styles.boroughBtn, {
                [styles.selected]: selectedBorough === borough,
              })}
              onClick={() => setSelectedBorough(borough)}
            >
              {borough}
            </button>
          ))}
        </div>
      </div>
      <div
        className={styles.resultsCount}
        aria-label="results-count"
        id="resultsCount"
      >
        {filterCopy}
      </div>
      <ul className={styles.landmarksList}>
        {filteredLandmarks.map((landmark: Landmark) => (
          <li>
            <button
              className={styles.item}
              onClick={() => handleClick(landmark)}
              key={landmark.fields.name}
            >
              <p className={styles.name}>{landmark.fields.name}</p>
              <div className={styles.landmarkDetails}>
                {landmark.fields.borough.split(",").map((borough: string) => (
                  <span className={styles.borough}>{borough}</span>
                ))}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LandmarkList;
