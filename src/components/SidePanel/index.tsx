const SidePanel = ({ isOpen, onClose, children }) => {
  return (
    <div className={`side-panel ${isOpen ? "open" : ""}`}>
      <div className="side-panel-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default SidePanel;
