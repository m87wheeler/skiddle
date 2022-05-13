import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const HeaderImage = styled.div<{ src: string }>`
  width: 100%;
  aspect-ratio: 4 / 3;
  background-image: ${({ src }) => `url("${src}")`};
  background-size: cover;
  background-position: center;
`;

export const ArtistContent = styled.div`
  position: relative;
  transform: translateY(-1rem);
  width: 100%;
  height: auto;
  padding: 2rem 1rem 1rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
  border: 0.5rem solid ${theme.palette.primary._};
  border-top: 1rem solid ${theme.palette.primary._};
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  background-color: ${theme.palette.primary.contrast};
  box-shadow: ${theme.ui.shadow2};

  img {
    width: 100%;
    max-width: calc(100vw - 3rem);
  }
`;
