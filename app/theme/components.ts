import { type Palette, type ThemeOptions } from "@mui/material/styles";

export const components = (palette: Palette): ThemeOptions["components"] => ({
  MuiSelect: {
    styleOverrides: {
      root: {
        borderRadius: "1rem",

        ".MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "unset",
      },
      contained: {
        boxShadow: "none",
        "&:hover": {
          background: "white",
          color: "#333333",

          boxShadow: "none",
        },
      },
      text: {
        "&:hover": {
          background: "transparent",
        },
      },
      containedInherit: {
        background: palette.mode === "light" ? "whitesmoke" : "#333333",

        "&:hover": {
          background: "white",
          color: "#333333",

          boxShadow: "none",
        },
      },
    },
  },

  MuiButtonGroup: {
    styleOverrides: {
      root: {
        boxShadow: "none",
      },
    },
  },
});
