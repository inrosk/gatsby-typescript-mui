import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ebf8ff",
      main: "#0aafff",
      contrastText: "#f9fafc",
    },

    secondary: {
      light: "#fff0eb",
      main: "#ff7d51",
      contrastText: "#f9fafc",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#1c2d41",
      secondary: "#3c4858",
      disabled: "#8392a5",
      hint: "#c0ccda",
    },
    neutral: {
      light: "#f9fafc",
      main: "#e5e9f2",
      dark: "#8392a5",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        /* "@font-face":  `"Poppins", "Helvetica", "Arial", sans-serif`, */
        html: {
          "font-size": "14px",
          color: "#3C4858",
          "@media (min-width:768px)": {
            fontSize: "1rem",
          },
        },
        body: {
          "font-size": "14px",
          color: "#3C4858",
          "@media (min-width:768px)": {
            fontSize: "1rem",
          },
        },
      },
    },
  },
})

export default theme

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral: Palette["primary"]
  }
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"]
  }
}
