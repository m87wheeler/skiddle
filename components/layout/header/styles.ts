import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { VariantType } from "../../../types";

export const HeaderContainer = styled.header<{ variant: VariantType }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  padding: 0 1rem;
  background-color: ${(p) => theme.palette[p.variant]._};
  box-shadow: ${theme.ui.shadow};
  z-index: 999;

  h1 {
    position: relative;
    height: calc(var(--header-height));
    width: auto;
  }
`;
