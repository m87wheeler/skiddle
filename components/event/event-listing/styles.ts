import styled from "styled-components";
import { theme } from "../../../styles/theme";
import Container from "../../layout/container/container";

export const HeaderImage = styled.div<{ src: string }>`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-image: ${({ src }) => `url("${src}")`};
  background-size: cover;
  background-position: center;
`;

export const EventContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  padding: 1rem;
  max-width: ${`${theme.breakpoints.maxWidth}px`};

  h1 {
    color: ${theme.palette.primary._};
    font-weight: 600;
  }
`;

export const ArtistContent = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
  padding: 1rem;
  overflow-x: auto;
`;

export const ArtistCardContainer = styled.div<{ src?: string }>`
  position: relative;
  min-width: 35vw;
  width: 35vw;
  aspect-ratio: 1 / 1;
  padding: 0.5rem;
  color: ${theme.palette.primary._};
  font-weight: 600;
  background-image: ${({ src }) => `url("${src}")`};
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: box-shadow 300ms ease-in-out;

  &:hover {
    box-shadow: ${theme.ui.shadowHover};
  }

  p {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 80%
    );
    z-index: 0;
  }
`;

export const EventContainer = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  padding: 1rem;
  background-color: ${theme.palette.primary.contrast};

  @media only screen and (min-width: ${theme.breakpoints.sm}px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    ${HeaderImage} {
      width: 100%;
    }

    ${ArtistContent} {
      grid-column: 1 / 3;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    ${ArtistCardContainer} {
      width: 100%;
      min-width: 0;
    }
  }

  @media only screen and (min-width: ${theme.breakpoints.md}px) {
    grid-template-columns: repeat(3, 1fr);

    ${ArtistContent} {
      grid-column: 1 / 4;
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media only screen and (min-width: ${theme.breakpoints.lg}px) {
    grid-template-columns: repeat(4, 1fr);

    ${EventContent} {
      grid-column: auto / span 2;
    }

    ${ArtistContent} {
      grid-column: 1 / 5;
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;
