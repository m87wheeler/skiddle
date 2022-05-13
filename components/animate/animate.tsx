import * as React from "react";
import { useInView } from "react-intersection-observer";
import { AnimateContainer, AnimateObject } from "./styles";

interface Props {
  children?: React.ReactNode;
  offsetY?: number;
  triggerOnce?: boolean;
  threshold?: number;
}

const Animate = ({
  children,
  offsetY = 4,
  triggerOnce = true,
  threshold = 0.05,
  ...props
}: Props) => {
  const { ref, inView } = useInView({ triggerOnce, threshold });

  return (
    <AnimateContainer ref={ref} {...props}>
      <AnimateObject inView={inView} offsetY={offsetY}>
        {children}
      </AnimateObject>
    </AnimateContainer>
  );
};

export default Animate;
