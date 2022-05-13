import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const LayoutContainer = styled.div`
  --header-height: 3rem;
  background-color: ${theme.palette.primary._};

  main {
    max-width: ${`${theme.breakpoints.maxWidth}px`};
    padding-top: var(--header-height);
    margin: 0 auto;
  }
`;
