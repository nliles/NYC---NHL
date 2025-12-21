import React from "react";
import styles from "./App.module.scss";

// Image imports
import empire from './assets/empire.jpg';
import trinity from './assets/trinity.jpg';
import life from './assets/life.jpg';
import dakota from './assets/dakota.jpg';
import woolworth from './assets/woolworth.jpg';
import map from './assets/map.jpg';
import met from './assets/met.jpg';
import stock from './assets/stock.jpg';
import centralpark from './assets/central-park.jpg';
import greenwood from './assets/flatiron.jpg';

const App = () => {
  return (
    <div className={styles.container}>
      {/* Left Panel - Fixed at 50% */}
      <div className={styles.leftPanel}>
        <div className={styles.textPanel}>
          <h1 className={styles.title}>National Historic Landmarks of NYC</h1>
          <p className={styles.paragraph}>
            NYC boasts 116 National Historic Landmarks, more than any other city 
            in the United States. These landmarks illustrate over 3,000 years of history, 
            from Wards Point's ancient burial grounds to Stonewall Inn's modern civil rights legacy.
          </p>
          <button className={styles.viewMapButton}>
            View Interactive Map
          </button>
        </div>
      </div>

      {/* Right Panel - Fixed at 50% */}
      <div className={styles.imageContainer}>
        
        {/* Internal Column 1: Narrow (1/3 of the right side) */}
        <div className={styles.narrowColumn}>
          <img src={dakota} alt="The Dakota" className={styles.collageImage} />
          <img src={life} alt="Life Building" className={styles.collageImage} />
          <img src={stock} alt="Stock Exchange" className={styles.collageImage} />
        </div>

        {/* Internal Column 2: Wide (2/3 of the right side) */}
        <div className={styles.wideGridColumn}>
          {/* Full Width Row */}
          <img src={trinity} alt="Trinity Church" className={styles.spanFull} />
          
          {/* Full Width Row (Map) */}
          <img src={map} alt="New York City Map" className={styles.spanFull} />

          {/* Split Row (Empire & Woolworth side-by-side) */}
          <img src={woolworth} alt="Woolworth Building" className={styles.splitImage} />
          <img src={empire} alt="Empire State Building" className={styles.splitImage} />
        </div>
      </div>
    </div>
  );
};

export default App;