import { Info } from "lucide-react";
import styles from "./LandmarkProfile.module.scss";
import colors from "@/styles/colors.module.scss";
import React from "react";

const ReferenceListItem = ({
  name,
  summary,
  attribution,
  onClick,
  isLastItem,
  showParenthesis,
  useSemiColon,
}: {
  name: string;
  summary: string;
  attribution?: string;
  onClick: () => void;
  isLastItem?: boolean;
  showParenthesis?: boolean;
  useSemiColon?: boolean;
}) => {
  const attributionText = showParenthesis
    ? ` (${attribution})`
    : ` ${attribution}`;
  return (
    <React.Fragment key={name}>
      {summary ? (
        <>
          <button
            type="button"
            onClick={onClick}
            className={styles.modalButton}
          >
            {name}
            <sup>
              <Info color={colors.lightBlue} size={12} />
            </sup>
          </button>
          {attribution && <span>{attributionText}</span>}
        </>
      ) : (
        <span>
          <span>{name}</span>
          {attribution && <span>{attributionText}</span>}
        </span>
      )}
      {!isLastItem && `${useSemiColon ? ";" : ","} `}
    </React.Fragment>
  );
};

export default ReferenceListItem;
