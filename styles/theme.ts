import { ITheme } from "../types";

const WHITE = "#ffffff";
const BLACK = "#181818";
const PRIMARY = "#46c3be";

export const theme: ITheme = {
  palette: {
    primary: {
      _: PRIMARY,
      contrast: WHITE,
    },
    secondary: {
      _: "#cdcdcd",
      contrast: BLACK,
    },
    white: {
      _: WHITE,
      contrast: PRIMARY,
    },
  },
  font: {
    family: {
      sans: "sans-serif",
    },
    size: {
      h1: "calc(1.375rem + 1.5vw)",
      h2: "calc(1.325rem + .9vw)",
      h3: "calc(1.3rem + .6vw)",
      h4: "calc(1.275rem + .3vw)",
      h5: "1.25rem",
      h6: "1rem",
      xs: "",
      sm: ".9rem",
      md: "1rem",
      lg: "",
      xl: "",
    },
  },
  ui: {
    shadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    shadow2: "0 3px -6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
    maxWidth: 1200,
  },
};
