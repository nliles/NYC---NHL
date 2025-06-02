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
            <a
              className={styles.caption}
              href={landmark.image_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {landmark.image_caption}
            </a>
          )}
          {landmark?.bullets && (
            <ul className={styles.bulletList}>
              {landmark.bullets.map((item: any, index: number) => (
                <li key={index} className={styles.bulletItem}>
                  <p className={styles.key}>{item.key}</p>
                  <p className={styles.value}>{item.value}</p>
                </li>
              ))}
            </ul>
          )}
          {landmark.quote && (
            <blockquote className={styles.quoteBlock}>
              <p className={styles.quoteText}>&ldquo;{landmark.quote}&rdquo;</p>
              <p className={styles.quoteAttribution}>
                — {landmark.quote_author}
              </p>
            </blockquote>
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
