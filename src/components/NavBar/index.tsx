import styles from "./NavBar.module.css";

const NavBar = ({ count, total }: { count: number; total: number }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <h1 className={styles.title}>National Historic Landmarks of NYC</h1>
        <div className={styles.progress}>
          <img src="progress.svg" />
          <span>{`${count} out of ${total}`}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
