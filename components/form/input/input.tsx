import * as React from "react";
import { InputElement } from "./styles";

interface Props extends React.ComponentPropsWithRef<"input"> {}

const Input = ({ ...props }: Props) => {
  const ref = React.useRef<HTMLInputElement | null>(null);

  const handleFocus = React.useCallback(() => {
    if (!ref || !ref.current) return;
    ref.current.select();
  }, []);

  return <InputElement ref={ref} onFocus={handleFocus} {...props} />;
};

export default Input;
