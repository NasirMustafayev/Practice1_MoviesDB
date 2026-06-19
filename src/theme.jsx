import { createTheme } from "@mui/material";

export const themeDark = createTheme({
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
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            transition: "all 0.3s ease"
          },
        },
      },
    },
  },
});


export const themeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000", // Use black as primary for contrast
    },
    background: {
      default: "#F5F5F5", // Light gray for a softer look
      paper: "#FFFFFF",   // Pure white for cards
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
    divider: "rgba(0, 0, 0, 0.1)", // Subtle lines
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
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: "none",
          transition: "border-color 0.2s ease",
          "&:hover": {
            borderColor: "rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            transition: "all 0.3s ease",
          },
        },
      },
    },
  },
});

