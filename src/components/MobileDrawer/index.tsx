// MobileDrawer.jsx
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./MobileDrawer.module.scss";
import cn from "classnames";

const MobileDrawer = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlers = useSwipeable({
    onSwipedUp: () => setIsExpanded(true),
    onSwipedDown: () => setIsExpanded(false),
    trackMouse: true,
    delta: 30,
    trackTouch: true,
  });

  const handleHeaderClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      {...handlers}
      className={cn(styles.mobileDrawer, {
        [styles.isExpanded]: isExpanded,
      })}
    >
      {/* Handle/Header */}
      <div onClick={handleHeaderClick} className={styles.handle}>
        <div className={styles.handleBtn} />
      </div>

      {/* Content */}
      <div
        className={cn(styles.content, {
          [styles.contentExpanded]: isExpanded,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default MobileDrawer;
