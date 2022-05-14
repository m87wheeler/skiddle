import router from "next/router";
import * as React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

const GoBackContainer = styled.button`
  position: absolute;
  top: calc(var(--header-height) + 1.25rem);
  left: 1.25rem;
  padding: 0.5rem 1rem 0.5rem 1.25rem;
  background-color: ${theme.palette.primary._};
  color: ${theme.palette.primary.contrast};
  border: none;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  cursor: pointer;
`;

const GoBack = () => {
  const handleClick = React.useCallback(() => {
    router.back();
  }, []);

  return <GoBackContainer onClick={handleClick}>GO BACK</GoBackContainer>;
};

export default GoBack;
