import styles from "./SidePanel.module.scss";
import { X } from "lucide-react";

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
        <X size={28} strokeWidth={1} />
      </button>
      <div className="side-panel-content">{children}</div>
    </div>
  );
};

export default SidePanel;
