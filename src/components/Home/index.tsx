import styles from "./Home.module.scss";
import empire from "@/assets/img/empire.jpg";
import { Link } from "react-router-dom";
import cn from "classnames";

const Quote = ({ isDesktop }: { isDesktop?: boolean }) => (
  <div
    className={cn(styles.quotePanel, {
      [styles.isDesktop]: isDesktop,
      [styles.isMobile]: !isDesktop,
    })}
  >
    <blockquote className={styles.quoteText}>
      "My heart pounded with joy when I saw New York in the distance. It was
      like coming out of the darkness when I left my town. I came to the Big
      City where I sensed the freedom..."
    </blockquote>
    <cite className={styles.quoteSource}>
      — L.D., letter to the Jewish Daily Forward advice column, 1915
    </cite>
  </div>
);

const Home = () => {
  return (
    <div className={styles.container}>
      {/* LEFT PANEL */}
      <div className={styles.leftPanel}>
        {/* Top Cream Section */}
        <div className={styles.textPanel}>
          <span className={styles.kicker}>New York City</span>
          <h1 className={styles.title}>
            National Historic
            <br />
            Landmarks
          </h1>

          <p className={styles.paragraph}>
            NYC is home to <strong>116 National Historic Landmarks</strong>,
            more than any other city in the United States. Explore over 3,000
            years of history, from Wards Point's ancient burial grounds to
            Stonewall Inn's modern civil rights legacy.
          </p>

          <Link to="/explore" className={styles.viewMapButton}>
            View interactive map
          </Link>
        </div>
        <Quote isDesktop />
      </div>

      {/* RIGHT PANEL */}
      <div className={styles.rightPanel}>
        <div className={styles.imageWrapper}>
          <div className={styles.outline} />
          <div className={styles.year}>1931</div>
          <img
            src={empire}
            alt="Empire State Building vintage photograph"
            className={styles.singleImage}
          />
        </div>
        <div className={styles.colorBlock} />
      </div>
      <Quote />
    </div>
  );
};

export default Home;
