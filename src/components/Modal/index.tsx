import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return null;

  const modalContent = (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalBody}>
          <button
            className={styles.modalClose}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={28} strokeWidth={1} />
          </button>
          {children}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, portalRoot);
};

export default Modal;
