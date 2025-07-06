// MobileDrawer.jsx
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./MobileDrawer.module.scss";
import cn from "classnames";

const MobileDrawer = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlers = useSwipeable({
    onSwipedUp: (eventData) => {
      eventData.event.stopPropagation();
      setIsExpanded(true);
    },
    onSwipedDown: (eventData) => {
      eventData.event.stopPropagation();
      setIsExpanded(false);
    },
    onSwiping: (eventData) => {
      eventData.event.stopPropagation();
      eventData.event.preventDefault();
    },
    trackMouse: true,
    delta: 30,
    trackTouch: true,
    preventScrollOnSwipe: true,
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
