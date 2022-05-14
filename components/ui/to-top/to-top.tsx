import * as React from "react";
import { StyleContext } from "../../../context/style-context";
import { ToTopContainer } from "./styles";

const ToTop = () => {
  const { headerColor } = React.useContext(StyleContext);

  const handleClick = React.useCallback(() => {
    if (typeof window === "undefined") return;
    window.scrollTo(0, 0);
  }, []);

  return (
    <ToTopContainer variant={headerColor} onClick={handleClick}>
      &#x25B2;
    </ToTopContainer>
  );
};

export default ToTop;
