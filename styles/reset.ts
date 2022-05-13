import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const Reset = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-rendering: geometricPrecision
}

html, body, #__next {
    width: 100%;
    height: 100%;
    font-family: ${theme.font.family.sans};
}
`;
