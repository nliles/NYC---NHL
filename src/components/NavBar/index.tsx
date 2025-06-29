import { useState } from "react";
import SidePanel from "../SidePanel";
import styles from "./NavBar.module.css";

const NavBar = ({ count, total }: { count: number; total: number }) => {
  const [showAbout, setShowAbout] = useState(false);
  const toggleAbout = () => setShowAbout(prev => !prev);
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
        <button className={styles.buttonLink} onClick={toggleAbout}>About</button>
        </div>
      </div>
    </nav>
    {showAbout && (
          <SidePanel onClose={toggleAbout}>
            ADD CONTENT
          </SidePanel>
    )}
    </>
  );
};

export default NavBar;
