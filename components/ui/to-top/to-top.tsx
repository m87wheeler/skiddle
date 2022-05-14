import * as React from "react";
import styled from "styled-components";

const ToTopContainer = styled.button``;

interface Props {
  children?: React.ReactNode;
}

const ToTop = ({ children, ...props }: Props) => {
  return <ToTopContainer>{children}</ToTopContainer>;
};

export default ToTop;
