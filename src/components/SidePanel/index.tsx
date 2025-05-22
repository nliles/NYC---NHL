import styles from "./SidePanel.module.css";

const SidePanel = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) => {
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
