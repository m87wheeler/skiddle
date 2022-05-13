import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const LikedContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.25rem;

  button {
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      width: 1.5rem;
    }
  }

  span {
    font-size: ${theme.font.size.sm};
    font-weight: 600;
  }
`;
