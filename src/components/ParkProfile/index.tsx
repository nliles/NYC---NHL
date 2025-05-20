import React, { useState, useEffect } from "react";
import styles from "./ParkProfile.module.css";

const LandmarkSidePanel = ({ landmark }) => {
  const [visitedLandmarks, setVisitedLandmarks] = useState(() => {
    const storedLandmarks = localStorage.getItem("visitedLandmarks");
    return storedLandmarks ? JSON.parse(storedLandmarks) : [];
  });

  // State for visited checkbox
  const visited = visitedLandmarks.includes(landmark.id);

  console.log(visited);

  console.log(localStorage.getItem("visitedLandmarks"));

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
    <div>
      <div className="h-full overflow-y-auto">
        {/* Header */}
        <div className="relative h-48 bg-gray-800">
          <h2 className={styles.header}>{landmark.name}</h2>
          <img
            src="map3.jpeg" // Update this path to your actual image path
            alt={landmark.name}
            width="100%"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        {landmark.quote && (
          <div className={styles.quote}>
            <blockquote>"{landmark.quote}"</blockquote>
            <div className={styles.author}>— {landmark.quote_author}</div>
          </div>
        )}
        {/* Content */}
        <div className="p-4">
          {/* Info section */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-gray-600">
              <span className="mr-2">📅</span> {/* Calendar icon */}
              <span className="text-sm">
                Designated: {landmark.date_designated}
              </span>
            </div>

            <div className="flex items-center text-gray-600">
              <span className="mr-2">📍</span> {/* Pin icon */}
              <span className="text-sm">
                {landmark.location?.area}, {landmark.county}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{landmark.description}</p>
          </div>

          {/* Visited checkbox */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="visited"
              checked={visited}
              onChange={handleVisitedChange}
              className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="visited" className="ml-2 text-gray-700">
              I've visited this landmark
            </label>
            {visited && <span className="ml-2 text-green-600">✓</span>}
          </div>

          {/* Link */}
          <a
            href={landmark.link}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Official Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandmarkSidePanel;
