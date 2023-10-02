import { createTheme } from "@mui/material/styles";
import "@fontsource/tajawal/300.css";
import "@fontsource/tajawal/400.css";
import "@fontsource/tajawal/500.css";
import "@fontsource/tajawal/700.css";
import "@fontsource/tajawal/800.css";
export const theme = createTheme({
  typography: {
    fontFamily: "tajawal",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightBolder: 800,
  },
  status: {
    error: "#EA5455",
    highlight: "#FF8C4B",
  },
  palette: {
    primary: {
      main: "#00ADEE",
      light: "#EBF8FE",
    },
    dark: {
      main: "#000000",
    },
    bright: {
      main: "#FFFFFF",
    },
    font: {
      main: "#1D1D35",
      light: "#CCD2E3",
      lowEmphasis: "#808080",
      grey: "#7D7E82",
      dark: "#000000",
    },
    green: {
      main: "#28C76F",
      light: "#E5F8EE",
    },
    maroon: {
      main: "#FF5975",
      light: "#FBE6E5",
    },
    orange: {
      main: "#FF7919",
      light: "#FFEDE0",
    },
    red: {
      main: "#EA5455",
      light: "#FCEAEB",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1200,
      xxl: 1920,
    },
  },
});
