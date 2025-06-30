import styles from "./NavBar.module.css";
import cn from "classnames";

const Progress = ({ count, total, className } : { count: number; total: number; className?: string }) => (
  <div className={cn(styles.progress, className)}>
  <img src="progress2.svg" width="45px" height="auto" />
  <span>{`${count} out of ${total}`}</span>
</div>
)

const NavBar = ({
  count,
  total,
  toggleAbout,
}: {
  count: number;
  total: number;
  toggleAbout: () => void;
}) => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.content}>
          <div className={styles.leftContent}>
          <h1 className={styles.title}>National Historic Landmarks of NYC</h1>
          <Progress count={count} total={total} className={styles.mobile}/>
          </div>
          <div className={styles.rightContent}>
            <Progress count={count} total={total} className={styles.desktop}/>
            <button className={styles.buttonLink} onClick={toggleAbout}>
              About
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
