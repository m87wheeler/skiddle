import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";
import { VariantType } from "../../../types";

export const ButtonGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const ButtonElement = styled.button<{
  variant: VariantType;
  invert: boolean;
  border: boolean;
}>`
  padding: 0.5rem 2rem;
  font-size: ${theme.font.size.md};
  background-color: ${(p) => theme.palette[p.variant]._};
  color: ${(p) => theme.palette[p.variant].contrast};
  border: ${(p) =>
    `2px solid ${theme.palette[p.variant][p.border ? "contrast" : "_"]}`};
  box-shadow: ${theme.ui.shadow};
  transition: all 300ms ease-in-out;
  cursor: pointer;

  ${({ invert, variant }) =>
    invert &&
    css`
      background-color: ${theme.palette[variant].contrast};
      color: ${theme.palette[variant]._};
      border: ${`2px solid ${theme.palette[variant].contrast}`};
    `}

  &:hover {
    background-color: ${(p) => theme.palette[p.variant].contrast};
    color: ${(p) => theme.palette[p.variant]._};

    ${({ invert, variant }) =>
      invert &&
      css`
        background-color: ${theme.palette[variant]._};
        color: ${theme.palette[variant].contrast};
      `}
  }
`;
