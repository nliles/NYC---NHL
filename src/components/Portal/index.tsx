import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

const Portal = ({
  children,
  containerId,
}: {
  children: ReactNode;
  containerId: string;
}) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const domContainer = document.getElementById(containerId);
    setContainer(domContainer);
  }, [containerId]);

  return container ? ReactDOM.createPortal(children, container) : null;
};

export default Portal;
