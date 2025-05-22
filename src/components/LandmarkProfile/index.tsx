import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./LandmarkProfile.module.css";

const LandmarkProfile = ({
  landmark,
  setVisitedLandmarks,
  visitedLandmarks,
}: any) => {
  // State for visited checkbox
  const visited = visitedLandmarks.includes(landmark.id);

  // Save visited status to localStorage when changed
  const handleVisitedChange = (e: any) => {
    const isVisited = e.target.checked;

    // Save to localStorage
    if (isVisited) {
      setVisitedLandmarks([...visitedLandmarks, landmark.id]);
      localStorage.setItem(
        "visitedLandmarks",
        JSON.stringify([...visitedLandmarks, landmark.id]),
      );
    } else {
      setVisitedLandmarks(
        visitedLandmarks.filter((id: any) => id !== landmark.id),
      );
      localStorage.setItem(
        "visitedLandmarks",
        JSON.stringify(
          visitedLandmarks.filter((id: any) => id !== landmark.id),
        ),
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.header}>{landmark.name}</h2>
          <img
            src={`landmark-${landmark.id}.jpg`} // Update this path to your actual image path
            alt={landmark.name}
            className={styles.img}
          />
          {landmark.image_caption && (
            <span className={styles.caption}>{landmark.image_caption}</span>
          )}
          <p className={styles.description}>{landmark.description}</p>
          {landmark.description2 && <p>{landmark.description2}</p>}
          {landmark.quote && (
            <div className={styles.quote}>
              <blockquote className={styles.quote}>
              <p>"{landmark.quote}"</p>
              {landmark.quote_author && (
                <span className={styles.author}>
                  — {landmark.quote_author}
                </span>
              )}
              </blockquote>
            </div>
          )}
        </div>
      </div>

      <div className={styles.learnMore}>
        <div className={styles.visited}>
          <label className={styles.label} htmlFor="visited">
            <input
              className={styles.checkbox}
              type="checkbox"
              id="visited"
              checked={visited}
              onChange={handleVisitedChange}
            />
            <span className={styles.customCheckbox}></span>
            I've visited this landmark
          </label>
        </div>
        <a
          href={landmark.link}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
          <img src="arrow.png" width="20px" height="20px" />
        </a>
      </div>
    </div>
  );
};

export default LandmarkProfile;
