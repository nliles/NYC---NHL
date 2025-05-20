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
        <h2 className={styles.header}>{landmark.name}</h2>
        <img
          src="grace.jpg" // Update this path to your actual image path
          alt={landmark.name}
          width="100%"
          className="w-full h-full object-cover opacity-80"
        />
        {landmark.quote && (
          <div className={styles.quote}>
            <blockquote>"{landmark.quote}"</blockquote>
            <div className={styles.author}>— {landmark.quote_author}</div>
          </div>
        )}
        <span className="text-sm">Designated: {landmark.date_designated}</span>
        <span className="text-sm">
          {landmark.location?.area}, {landmark.county}
        </span>
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-gray-700">{landmark.description}</p>

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
