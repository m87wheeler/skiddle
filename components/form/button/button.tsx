import * as React from "react";
import { VariantType } from "../../../types";
import { ButtonElement } from "./styles";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  invert?: boolean;
  variant?: VariantType;
  border?: boolean;
}

const Button = ({
  invert = false,
  variant = "primary",
  border = false,
  children,
  ...props
}: Props) => {
  return (
    <ButtonElement variant={variant} invert={invert} border={border} {...props}>
      {children}
    </ButtonElement>
  );
};

export { ButtonGroup } from "./styles";
export default Button;
