import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./LandmarkList.module.scss";
import { Landmark } from "../../types";
import SearchBar from "../SearchBar";
import MobileDrawer from "../MobileDrawer";
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
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setFilteredLandmarks(landmarks);
  }, [landmarks]);

  const handleOnChange = (inputValue: string) => {
    setInputValue(inputValue);
    const formatString = (str: string) =>
      str.toLowerCase().replace(/[.,]/g, "").replace(/\s+/g, "");

    let filteredLandmarks =
      selectedBorough === "All"
        ? landmarks
        : landmarks.filter((landmark) =>
            landmark.fields.borough.includes(selectedBorough || ""),
          ) || landmarks;
    const searchTerm = formatString(inputValue || "");

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

  useEffect(() => {
    if (selectedBorough) handleOnChange(inputValue);
  }, [selectedBorough]);

  const filterCopy =
    landmarks.length === filteredLandmarks.length
      ? `Showing ${landmarks.length} landmarks`
      : `Showing ${filteredLandmarks.length} of ${landmarks.length} landmarks`;

  const getListPanel = () => (
    <>
    <div className={styles.panelHeader}>
      <SearchBar onChange={handleOnChange} />
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
  </>
  )

  return (
  <>
  <div className={styles.leftPanel}>
    {getListPanel()}
  </div>
    <MobileDrawer>
        {getListPanel()}
    </MobileDrawer>
    </>
  );
};

export default LandmarkList;
