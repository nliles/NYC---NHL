import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

const Portal = ({ children, containerId }) => {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const domContainer = document.getElementById(containerId);
    setContainer(domContainer);
  }, [containerId]);

  return container ? ReactDOM.createPortal(children, container) : null;
};

export default Portal;
