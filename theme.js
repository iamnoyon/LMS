import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#e0f4ec", // lightest
      100: "#b2e1d2", // lighter
      200: "#80c8b2", // light
      300: "#4fb693", // base color (your green)
      400: "#2e8f7a", // darker
      500: "#0f6849", // base color
      600: "#0d533b", // darker
      700: "#094027", // dark
      800: "#05281a", // darker
      900: "#02170f", // darkest
    },
    light: "#FFFFFF", // Common white color
    dark: "#000000", // Common black color
    theme: "#452a73",
    // Common colors
    gray: {
      50: "#f7fafc", // very light gray
      100: "#edf2f7", // light gray
      200: "#e2e8f0", // soft gray
      300: "#cbd5e0", // medium gray
      400: "#a0aec0", // gray
      500: "#718096", // dark gray
      600: "#4a5568", // darker gray
      700: "#2d3748", // darkest gray
      800: "#1a202c", // even darker gray
      900: "#171923", // almost black gray
    },
    blue: {
      50: "#ebf8ff", // very light blue
      100: "#bee3f8", // light blue
      200: "#90cdf4", // soft blue
      300: "#63b3ed", // medium blue
      400: "#007bff", // blue
      500: "#3182ce", // dark blue
      600: "#2b6cb0", // darker blue
      700: "#2c5282", // darkest blue
      800: "#2a4365", // even darker blue
      900: "#1A365D", // almost black blue
    },
    yellow: {
      50: "#fffaf0", // very light yellow
      100: "#feebc8", // light yellow
      200: "#fbd38d", // soft yellow
      300: "#f6e05e", // medium yellow
      400: "#ffc107", // yellow
      500: "#d69e2e", // dark yellow
      600: "#b7791f", // darker yellow
      700: "#975a16", // darkest yellow
      800: "#744210", // even darker yellow
      900: "#5f370e", // almost black yellow
    },
    green: {
      50: "#f0fff4", // very light green
      100: "#c6f6d5", // light green
      200: "#9ae3d1", // soft green
      300: "#68d391", // medium green
      400: "#48bb78", // green
      500: "#38a169", // dark green
      600: "#2f855a", // darker green
      700: "#276749", // darkest green
      800: "#22543d", // even darker green
      900: "#1c4532", // almost black green
    },
    red: {
      50: "#fff5f5", // very light red
      100: "#fed7d7", // light red
      200: "#feb2b2", // soft red
      300: "#fc8181", // medium red
      400: "#f56565", // red
      500: "#e53e3e", // dark red
      600: "#c53030", // darker red
      700: "#9b2c2c", // darkest red
      800: "#822727", // even darker red
      900: "#63171b", // almost black red
    },
  },
  styles: {
    global: {
      body: {
        bg: "light", // Light background color
        color: "dark", // Dark text color
      },
    },
  },
  components: {
    Input: {
      baseStyle: {
        // Base styles for the input component
        field: {
          _focus: {
            borderColor: "brand.500", // Change focus border color
            boxShadow: "0 0 0 1px #0f6849", // Custom focus shadow (using your brand color)
            outline: "none", // Remove default outline
          },
        },
      },
    },
  },
});

export default theme;
