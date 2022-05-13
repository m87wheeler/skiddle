import styled, { css } from "styled-components";

export const AnimateContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const AnimateObject = styled.div<{ inView: boolean; offsetY: number }>`
  position: relative;
  inset: 0;
  transform: ${({ offsetY }) => `translateY(${offsetY * 0.25}rem)`};
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: transform 300ms ease-in-out, opacity 250ms ease-in-out;

  ${({ inView }) =>
    inView &&
    css`
      transform: translateY(0);
      opacity: 1;
    `}
`;
