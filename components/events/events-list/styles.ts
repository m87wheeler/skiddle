import styled, { keyframes } from "styled-components";
import { theme } from "../../../styles/theme";

export const EventsListContainer = styled.section`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 3rem;
`;

export const EventsListItems = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  list-style: none;

  li {
    width: inherit;
    height: inherit;
  }

  @media only screen and (min-width: ${theme.breakpoints.sm}px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
  }
  @media only screen and (min-width: ${theme.breakpoints.md}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: ${theme.breakpoints.lg}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const pulse = keyframes`
  0%, 100% {
    fill: white;
  }
  50% {
    fill: ${theme.palette.primary._};
  }
`;

export const EventsLoadingContainer = styled.div<{ invert: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  p {
    color: ${theme.palette.primary.contrast};
  }

  svg {
    width: clamp(5rem, 20vw, 8rem);
    height: auto;

    path {
      animation: ${pulse} 1500ms ease-in-out infinite;
    }
  }
`;
