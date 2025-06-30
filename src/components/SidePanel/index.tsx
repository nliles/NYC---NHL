import styles from "./SidePanel.module.scss";

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
        <img src="close.svg" alt="Close" width="17px" height="17px" />
      </button>
      <div className="side-panel-content">{children}</div>
    </div>
  );
};

export default SidePanel;
