import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const HeaderImage = styled.div<{ src: string }>`
  width: 100%;
  aspect-ratio: 4 / 3;
  background-image: ${({ src }) => `url("${src}")`};
  background-size: cover;
  background-position: center;
`;

export const EventContent = styled.div`
  position: relative;
  transform: translateY(-1rem);
  width: 100%;
  height: auto;
  padding: 2rem 1rem 1rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  border: 0.5rem solid ${theme.palette.primary._};
  border-top: 1rem solid ${theme.palette.primary._};
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  background-color: ${theme.palette.primary.contrast};
  box-shadow: ${theme.ui.shadow2};

  h2 {
    padding: 2rem 0 1rem;
  }

  img {
    width: 100%;
    max-width: calc(100vw - 3rem);
  }

  p {
    line-height: 1.5;
  }
`;

export const EventDate = styled.p`
  color: ${theme.palette.primary._};
  font-weight: 600;
`;

export const EventDoors = styled.p`
  font-weight: 600;

  span {
    color: ${theme.palette.primary._};
  }
`;

export const ArtistCardContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  background-color: ${theme.palette.primary._};

  p {
    font-size: ${theme.font.size.h5};
    font-weight: 600;
    color: ${theme.palette.primary.contrast};
  }

  img {
    border: 0.25rem solid ${theme.palette.primary.contrast};
  }
`;
