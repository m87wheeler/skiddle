import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { VariantType } from "../../../types";

export const ToTopContainer = styled.button<{ variant: VariantType }>`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 3.5rem;
  padding-bottom: 0.25rem;
  height: 3.5rem;
  font-size: 1.25rem;
  color: ${({ variant }) => theme.palette[variant]._};
  background-color: ${({ variant }) => theme.palette[variant].contrast};
  border: ${({ variant }) => `.2rem solid ${theme.palette[variant]._}`};
  border-radius: 50%;
  cursor: pointer;
`;
