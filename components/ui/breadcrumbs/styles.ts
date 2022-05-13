import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const BreadcrumbsContainer = styled.ul<{ basePage: boolean }>`
  padding: ${({ basePage }) => (basePage ? "0" : "1rem")};
  background-color: ${theme.palette.primary._};
  list-style: none;

  li {
    a {
      color: ${theme.palette.primary.contrast};
      font-size: ${theme.font.size.sm};
      text-transform: capitalize;
      font-weight: 600;
      text-decoration: underline;
    }
  }
`;
