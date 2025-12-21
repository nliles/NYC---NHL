// import { useNavigate } from "react-router-dom";
import styles from "./App.module.scss";
// ... (Your image imports)
import empire from './assets/empire.jpg'
import trinity from './assets/trinity.jpg'
import life from './assets/life.jpg'
import dakota from './assets/dakota.jpg';
import woolworth from './assets/woolworth.jpg';
import map from './assets/map.jpg';
import met from './assets/met.jpg';
import stock from './assets/stock.jpg';
import centralpark from './assets/central-park.jpg';
import greenwood from './assets/flatiron.jpg';
import "./App.css";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.textPanel}>
          <h1 className={styles.title}>National Historic Landmarks of NYC</h1>
          <p className={styles.paragraph}>
          NYC boasts 116 National Historic Landmarks, more than any other city in the United States. These landmarks illustrate over 3,000 years of history, from Wards Point's ancient burial grounds to Stonewall Inn's modern civil rights legacy.
          </p>
          <button className={styles.viewMapButton}>Explore Landmarks</button>
        </div>
      </div>

      <div className={styles.imageContainer}>
        {/* COLUMN 1: Narrow vertical shots */}
        <div className={styles.leftImageColumn}>
          <img src={dakota} alt="Dakota" className={styles.collageImage} />
          <img src={life} alt="Life Building" className={styles.collageImage} />
          <img src={stock} alt="Stock Exchange" className={styles.collageImage} />
        </div>

        {/* COLUMN 2: Wide featured shots */}
        <div className={styles.middleImageColumn}>
          <img src={trinity} alt="Trinity Church" className={styles.collageImage} />
          <img src={map} alt="City Map" className={styles.collageImage} />
          <img src={centralpark} alt="Central Park" className={styles.collageImage} />
          <img src={greenwood} alt="Flatiron" className={styles.collageImage} />
        </div>

        {/* COLUMN 3: The "Filler" column to fix the empty space */}
        <div className={styles.rightImageColumn}>
          <img src={woolworth} alt="Woolworth" className={styles.collageImage} />
          <img src={empire} alt="Empire State" className={styles.collageImage} />

        </div>
      </div>
    </div>
  );
};

export default App;