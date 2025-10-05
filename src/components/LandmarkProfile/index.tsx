import { ArrowRight } from "lucide-react";
import { saveToStorage } from "../../helpers/localStorage";
import styles from "./LandmarkProfile.module.scss";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

const LandmarkProfile = ({
  landmark,
  setVisitedLandmarks,
  visitedLandmarks,
}: any) => {
  // State for visited checkbox
  const visited = visitedLandmarks.includes(landmark.name);

  // Save visited status to localStorage when changed
  const handleVisitedChange = (e: any) => {
    const isVisited = e.target.checked;

    // Save to localStorage
    if (isVisited) {
      setVisitedLandmarks([...visitedLandmarks, landmark.name]);
      saveToStorage([...visitedLandmarks, landmark.name]);
    } else {
      const filtered = visitedLandmarks.filter(
        (name: any) => name !== landmark.name,
      );
      setVisitedLandmarks(filtered);
      saveToStorage(filtered);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.fixedHeader}>
            <h2 className={styles.header}>{landmark.name}</h2>
          </div>
          <div className={styles.scrollableContent}>
            <img
              src={landmark?.image}
              alt={landmark.name}
              className={styles.img}
            />
            {landmark?.imageTitle && landmark?.imageDescription && (
              <a
                className={styles.caption}
                href={landmark.imageDescription}
                target="_blank"
                rel="noopener noreferrer"
              >
                {landmark.imageTitle}
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
                <ReactMarkdown
                  className={styles.quoteText}
                  remarkPlugins={[remarkBreaks]}
                >
                  {landmark.quote}
                </ReactMarkdown>
                <p className={styles.quoteAttribution}>
                  — {landmark.quoteAuthor}
                </p>
              </blockquote>
            )}
          </div>
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
          href={landmark.moreInfoUrl}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
          <ArrowRight strokeWidth={1} size={20} color="#6b8e8e" />
        </a>
      </div>
    </div>
  );
};

export default LandmarkProfile;
