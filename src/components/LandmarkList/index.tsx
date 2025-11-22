import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./LandmarkList.module.scss";
import { Landmark } from "@/types";
import SearchBar from "@/components/SearchBar";
import MobileDrawer from "@/components/MobileDrawer";
import camelCase from "lodash/camelCase";
import { Check } from "lucide-react";
import colors from "@/styles/colors.module.scss";

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
  selectedLandmarkId,
  visitedLandmarks = [],
}: {
  landmarks: Landmark[];
  handleClick: (landmarkId: string) => void;
  selectedLandmarkId?: string;
  visitedLandmarks: string[];
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
      filtered = filtered.filter((landmark: Landmark) =>
        landmark.borough.includes(borough),
      );
    }

    const formattedSearchTerm = formatString(searchTerm);

    if (formattedSearchTerm !== "") {
      filtered = filtered.filter((landmark) => {
        const nameMatch = formatString(landmark.name).includes(
          formattedSearchTerm,
        );

        // Normalize bullets array regardless of Contentful format
        const bulletsArray = Array.isArray(landmark.bullets)
          ? landmark.bullets
          : Array.isArray((landmark.bullets as any)?.bullets)
            ? (landmark.bullets as any).bullets
            : [];

        const architectEntry = bulletsArray.find(
          (b: any) => b.key.toLowerCase() === "architect",
        );

        const landscapeArchitectEntry = bulletsArray.find(
          (b: any) => b.key.toLowerCase() === "landscape architect",
        );

        const architectValue = architectEntry
          ? formatString(architectEntry.value)
          : "";
        const landscapeArchitectValue = landscapeArchitectEntry
          ? formatString(landscapeArchitectEntry.value)
          : "";

        const architectMatch =
          architectValue !== "" && architectValue.includes(formattedSearchTerm);

        const landscapeArchitectMatch =
          landscapeArchitectValue !== "" &&
          landscapeArchitectValue.includes(formattedSearchTerm);

        return nameMatch || architectMatch || landscapeArchitectMatch;
      });
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
    setSelectedBorough(borough === selectedBorough ? undefined : borough);
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
          <li key={landmark.id}>
            <button
              className={cn(styles.item, {
                [styles.selected]: landmark.id === selectedLandmarkId,
              })}
              onClick={() => handleClick(landmark.id)}
            >
              <div>
                <p className={styles.name}>{landmark.name}</p>
                <div className={styles.landmarkDetails}>
                  {landmark.borough.split(",").map((borough: string) => (
                    <span
                      key={borough}
                      className={cn(styles.borough, styles[camelCase(borough)])}
                    >
                      {borough}
                    </span>
                  ))}
                </div>
              </div>
              {visitedLandmarks.includes(landmark.id) && (
                <Check color={colors.lightBlue} size={20} />
              )}
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
