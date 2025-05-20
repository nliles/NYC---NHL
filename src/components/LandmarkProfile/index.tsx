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
        <div>
        <h2 className={styles.header}>{landmark.name}</h2>
        <img
          src="grace.jpg" // Update this path to your actual image path
          alt={landmark.name}
          width="100%"
        />
        {landmark.quote && (
          <div className={styles.quote}>
            <blockquote>"{landmark.quote}"</blockquote>
            <div className={styles.author}>— {landmark.quote_author}</div>
          </div>
        )}
        <span>Designated: {landmark.date_designated}</span>
        <span>
          {landmark.location?.area}, {landmark.county}
        </span>
        <h3>Description</h3>
        <p>{landmark.description}</p>
        </div>

        <div className={styles.visited}>
          <input
            type="checkbox"
            id="visited"
            checked={visited}
            onChange={handleVisitedChange}
          />
          <label htmlFor="visited">
            I've visited this landmark
          </label>
        </div>
      </div>

      <div className={styles.learnMore}>
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
