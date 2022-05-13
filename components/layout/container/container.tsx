import * as React from "react";
import { ContainerWrapper } from "./styles";

interface Props {
  children?: React.ReactNode;
}

const Container = ({ children, ...props }: Props) => {
  return <ContainerWrapper {...props}>{children}</ContainerWrapper>;
};

export default Container;
