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
  // const navigate = useNavigate();
  const handleViewMap = () => {
    // navigate("/map"); // Adjust this route to match your map page route
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
      <div className={styles.textPanel}>
        <h1 className={styles.title}>
          National Historic Landmarks of NYC
        </h1>
        <p className={styles.paragraph}>
          Explore over 116 landmarks illustrating 3,000 years of history.
        </p>
        <button onClick={handleViewMap} className={styles.viewMapButton}>
          View Interactive Map
        </button>
      </div>
      </div>
      <div className={styles.imageContainer}>
      
      {/* New thin left column */}
      <div className={styles.leftImageColumn}>
        <img 
          src={dakota} 
          alt="The Dakota" 
          className={`${styles.collageImage} ${styles.photoDakota}`} 
        />
        <img 
          src={life} 
          alt="Life Magazine Building" 
          className={`${styles.collageImage} ${styles.photoLifeLeft}`} 
        />
        <img 
          src={stock} 
          alt="The Dakota" 
          className={`${styles.collageImage} ${styles.photoDakota}`} 
        />
       <img 
          src={greenwood} 
          alt="The Dakota" 
          className={`${styles.collageImage} ${styles.photoDakota}`} 
        />
        <img 
          src={met} 
          alt="The Dakota" 
          className={`${styles.collageImage} ${styles.photoDakota}`} 
        />
      </div>

      {/* Main collage - right panel */}
      <div className={styles.rightPanel}>
        <img 
          src={trinity} 
          alt="Trinity Church" 
          className={`${styles.collageImage} ${styles.photoTrinity}`} 
        />

        <img 
          src={map} 
          alt="New York City Map" 
          className={`${styles.collageImage} ${styles.photoMap}`} 
        />

        <img 
          src={woolworth} 
          alt="Woolworth Building" 
          className={`${styles.collageImage} ${styles.photoWoolworth}`} 
        />
        
        <img 
          src={empire} 
          alt="Empire State Building" 
          className={`${styles.collageImage} ${styles.photoLife}`} 
        />

        <img 
          src={centralpark} 
          alt="Central Park" 
          className={`${styles.collageImage} ${styles.photoCentralPark}`} 
        />
      </div>
    </div>
    </div>
  );
};

export default App;