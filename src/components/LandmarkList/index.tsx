import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./LandmarkList.module.scss";
import { Landmark, LandmarkFields } from "../../types";
import SearchBar from "../SearchBar";
import MobileDrawer from "../MobileDrawer";
import camelCase from "lodash/camelCase";

type Borough =
  | "Manhattan"
  | "Brooklyn"
  | "Queens"
  | "The Bronx"
  | "Staten Island";

const boroughs: Borough[] = [
  "Manhattan",
  "Brooklyn",
  "Queens",
  "The Bronx",
  "Staten Island",
];

const LandmarkList = ({
  landmarks,
  handleClick,
  selectedLandmark,
}: {
  landmarks: Landmark[];
  handleClick: (landmark: Landmark) => void;
  selectedLandmark?: LandmarkFields;
}) => {
  const [filteredLandmarks, setFilteredLandmarks] = useState(landmarks);
  const [selectedBorough, setSelectedBorough] = useState<Borough>();
  const [inputValue, setInputValue] = useState("");

  const formatString = (str: string) =>
    str.toLowerCase().replace(/[.,]/g, "").replace(/\s+/g, "");

  // Single source of truth for filtering logic
  const applyFilters = (searchTerm: string, borough?: Borough) => {
    let filtered = landmarks;

    // Apply borough filter
    if (borough) {
      filtered = filtered.filter((landmark) =>
        landmark.fields.borough.includes(borough),
      );
    }

    // Apply search filter
    const formattedSearchTerm = formatString(searchTerm);
    if (formattedSearchTerm !== "") {
      filtered = filtered.filter((landmark) =>
        formatString(landmark.fields.name).includes(formattedSearchTerm),
      );
    }

    setFilteredLandmarks(filtered);
  };

  useEffect(() => {
    applyFilters(inputValue, selectedBorough);
  }, [landmarks, selectedBorough]);

  const handleOnChange = (inputValue: string) => {
    setInputValue(inputValue);
    applyFilters(inputValue, selectedBorough);
  };

  const toggleBorough = (borough: Borough) => {
    setSelectedBorough(borough);
    applyFilters(inputValue, borough);
  };

  const filterCopy =
    landmarks.length === filteredLandmarks.length
      ? `Showing ${landmarks.length} landmarks`
      : `Showing ${filteredLandmarks.length} of ${landmarks.length} landmarks`;

  const getListPanel = () => (
    <div className={styles.listContainer}>
      <div className={styles.panelHeader}>
        <SearchBar onChange={handleOnChange} />
        <div className={styles.boroughsContainer}>
          {boroughs.map((borough) => (
            <button
              key={borough}
              className={cn(styles.boroughBtn, styles[camelCase(borough)], {
                [styles.selected]: selectedBorough === borough,
              })}
              onClick={() => toggleBorough(borough)}
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
          <li key={landmark.fields.name}>
            <button
              className={cn(styles.item, {
                [styles.selected]:
                  landmark.fields.name === selectedLandmark?.name,
              })}
              onClick={() => handleClick(landmark)}
            >
              <p className={styles.name}>{landmark.fields.name}</p>
              <div className={styles.landmarkDetails}>
                {landmark.fields.borough.split(",").map((borough: string) => (
                  <span
                    key={borough}
                    className={cn(styles.borough, styles[camelCase(borough)])}
                  >
                    {borough}
                  </span>
                ))}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div className={styles.leftPanel}>{getListPanel()}</div>
      <MobileDrawer>{getListPanel()}</MobileDrawer>
    </>
  );
};

export default LandmarkList;
