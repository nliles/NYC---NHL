import { useState } from "react";
import SidePanel from "../SidePanel";
import styles from "./NavBar.module.css";
import About from "../About";

const NavBar = ({ count, total }: { count: number; total: number }) => {
  const [showAbout, setShowAbout] = useState(false);
  const toggleAbout = () => setShowAbout((prev) => !prev);
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.content}>
          <h1 className={styles.title}>National Historic Landmarks of NYC</h1>
          <div className={styles.rightContent}>
            <div className={styles.progress}>
              <img src="progress.svg" />
              <span>{`${count} out of ${total}`}</span>
            </div>
            <button className={styles.buttonLink} onClick={toggleAbout}>
              About
            </button>
          </div>
        </div>
      </nav>
      {showAbout && (
        <SidePanel onClose={toggleAbout}>
          <About />
        </SidePanel>
      )}
    </>
  );
};

export default NavBar;
