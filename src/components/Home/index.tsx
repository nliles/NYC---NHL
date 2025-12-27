import styles from "./Home.module.scss";
import empire from "@/assets/img/empire.jpg";
import brooklyn from "@/assets/img/brooklyn.jpg";
import trinity from "@/assets/img/trinity.jpg";
import life from "@/assets/img/life.jpg";
import woolworth from "@/assets/img/woolworth.jpg";
import map from "@/assets/img/map.jpg";
import stock from "@/assets/img/stock.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* LEFT PANEL */}
      <div className={styles.leftPanel}>
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
      </div>

      {/* RIGHT PANEL */}
      <div className={styles.imageContainer}>
        {/* LEFT NARROW COLUMN */}
        <div className={styles.narrowColumn}>
          <img src={brooklyn} className={styles.collageImage} />
          <img src={life} className={styles.collageImage} />
          <img src={stock} className={styles.collageImage} />
        </div>

        {/* RIGHT WIDE COLUMN */}
        <div className={styles.wideGridColumn}>
          <div className={styles.splitRow}>
            <img src={empire} />
            <img src={woolworth} />
          </div>

          <div className={styles.mapRow}>
            <img src={map} />
          </div>

          <div className={styles.columnStack}>
            <img src={trinity} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
