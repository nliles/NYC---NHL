import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

const Portal = ({ children, containerId }: { children: ReactNode; containerId: string }) => {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const domContainer = document.getElementById(containerId);
    setContainer(domContainer as any);
  }, [containerId]);

  return container ? ReactDOM.createPortal(children, container) : null;
};

export default Portal;
