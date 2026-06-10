import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFFFFF", // Use white as primary for a cleaner look
    },
    background: {
      default: "#060606", // Near-black background for maximum immersion
      paper: "#111111",   // Slight lift for card surfaces
    },
    text: {
      primary: "#EDEDED",
      secondary: "#888888",
    },
    divider: "rgba(255, 255, 255, 0.1)", // Very subtle lines
  },
  typography: {
    fontFamily: '"Inter", "system-ui", sans-serif',
    h5: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    body1: {
      letterSpacing: "0.01em",
    },
  },
  shape: {
    borderRadius: 16, // Softer, more modern feel
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#111111",
          border: "1px solid rgba(255, 255, 255, 0.08)", // Subtle border instead of shadow
          boxShadow: "none", // Remove heavy shadows
          transition: "border-color 0.2s ease",
          "&:hover": {
            borderColor: "rgba(255, 255, 255, 0.3)", // Highlight on hover
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
          padding: "8px 16px",
        },
      },
    },
  },
});

export default theme;