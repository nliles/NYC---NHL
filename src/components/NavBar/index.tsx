import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import cn from "classnames";
import colors from "@/styles/colors.module.scss";

const Progress = ({
  count,
  total,
  className,
}: {
  count: number;
  total: number;
  className?: string;
}) => (
  <div className={cn(styles.progress, className)}>
    <Check color={colors.lightBlue} size={20} />
    <span>Visited: {`${count} out of ${total}`}</span>
  </div>
);

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
    <nav className={styles.nav}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <Link to="/" className={styles.titleLink}>
            <h1 className={styles.title}>National Historic Landmarks of NYC</h1>
          </Link>
          <Progress count={count} total={total} className={styles.mobile} />
        </div>
        <div className={styles.rightContent}>
          <Progress count={count} total={total} className={styles.desktop} />
          <button className={styles.buttonLink} onClick={toggleAbout}>
            About
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
