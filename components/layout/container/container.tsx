import * as React from "react";
import { ContainerWrapper } from "./styles";

interface Props {
  children?: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <ContainerWrapper ref={ref}>{props.children}</ContainerWrapper>;
});
Container.displayName = "Container";

export default Container;
