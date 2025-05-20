import styles from "./SidePanel.module.css";

const SidePanel = ({ isOpen, onClose, children }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClose}>
        <img src="close.png" alt="Close" width="25px" height="25px" />
      </button>
      <div className="side-panel-content">{children}</div>
    </div>
  );
};

export default SidePanel;
