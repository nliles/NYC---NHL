import React from "react";
import styles from "./App.module.scss";

import empire from "./assets/empire.jpg";
import brooklyn from "./assets/brooklyn.jpg";
import trinity from "./assets/trinity.jpg";
import life from "./assets/life.jpg";
import dakota from "./assets/dakota.jpg";
import woolworth from "./assets/woolworth.jpg";
import dakota3 from "./assets/dakota3.jpg";
import map from "./assets/map.jpg";
import equitable from "./assets/equitable.jpg";
import stock from "./assets/stock.jpg";
import stewart from "./assets/stewart.jpg";
import flatiron from "./assets/flatiron.jpg";

const App = () => {
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
            NYC is home to <strong>116 National Historic Landmarks</strong>, more
            than any other city in the United States. Explore over 3,000 years of history, from Wards Point's ancient burial grounds to Stonewall Inn's modern civil rights legacy.
          </p>

          <button className={styles.viewMapButton}>
            View interactive map
          </button>
        </div>
      </div>

      {/* RIGHT PANEL — SINGLE SCROLL UNIT */}
      <div className={styles.imageContainer}>
        {/* LEFT NARROW COLUMN */}
        <div className={styles.narrowColumn}>
          <img src={dakota} className={styles.collageImage} />
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
            <div />
            <div className={styles.stackCell}>
              <img src={trinity} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;






