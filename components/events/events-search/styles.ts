import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const EventsSearchContainer = styled.div`
  width: 100%;
  max-width: ${`${theme.breakpoints.maxWidth / 2}px`};
  padding: 2rem 1rem;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1rem;
  background-color: ${theme.palette.primary._};
`;
