import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333",
      dark: "#121212",
      contrastText: "#f9fafc",
    },

    secondary: {
      light: "#f9fafc",
      main: "#e5e9f2",
      dark: "#c0ccda",
    },

    neutral: {
      light: "#f5fbfe",
      main: "#0aafff",
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
  },
  typography: {
    fontFamily: [`Poppins`, `Helvetica`, `Arial`, `sans-serif`].join(","),
  },
  overrides: {
    MuiButton: {
      root: {
        textAlign: "center",
      },
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: "0.6em",
      },
      h1: {
        fontSize: "3.052rem",
        fontWeight: 600,
        textTransform: "capitalize",
        "@media (max-width:576px)": {
          fontSize: "2.441rem",
        },
      },
      h2: {
        fontSize: "2.441rem",
        fontWeight: 600,
        textTransform: "capitalize",
        "@media (max-width:576px)": {
          fontSize: "1.953rem",
        },
      },
      h3: {
        fontSize: "1.953rem",
        fontWeight: 600,
        textTransform: "capitalize",
        "@media (max-width:576px)": {
          fontSize: "1.563rem",
        },
      },
      h4: {
        fontSize: "1.563rem",
        fontWeight: 500,
        textTransform: "capitalize",
        "@media (max-width:576px)": {
          fontSize: "1.25rem",
        },
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 500,
        textTransform: "capitalize",
        "@media (max-width:576px)": {
          fontSize: "1.15rem",
        },
      },
      h6: {
        fontSize: "1.1rem",
        fontWeight: 500,
      },
      subtitle1: {
        color: "#888888",
      },
    },
    MuiCssBaseline: {
      "@global": {
        /* "@font-face":  `"Poppins", "Helvetica", "Arial", sans-serif`, */
        html: {
          "font-size": "14px",
          "line-height": "1.5",
          color: "#3C4858",
          "@media (min-width:768px)": {
            fontSize: "1rem",
          },
        },
        body: {
          "font-size": "14px",
          "line-height": "1.5",
          color: "#3C4858",
          "@media (min-width:768px)": {
            fontSize: "1rem",
          },
        },
      },
    },
  },
});

export default theme;

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}
