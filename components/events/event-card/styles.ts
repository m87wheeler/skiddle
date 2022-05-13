import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const EventCardContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: ${theme.ui.shadow};
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 300ms ease-in-out;

  &:hover {
    box-shadow: ${theme.ui.shadowHover};
  }
`;

export const EventImage = styled.div<{ src: string }>`
  position: relative;
  width: inherit;
  aspect-ratio: 4 / 3;
  background-image: ${({ src }) => `url("${src}")`};
  background-size: cover;
  background-position: center;
`;

export const EventContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  padding: 1rem;
  line-height: 1;
`;

export const EventName = styled.h5`
  font-size: ${theme.font.size.h4};
  color: ${theme.palette.primary._};
  font-weight: 600;
  letter-spacing: 0.025em;
`;

export const EventDescription = styled.p`
  padding-left: 1rem;
  line-height: 1.25;
  display: none;
`;
