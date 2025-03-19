const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"], // Include all your source files
  darkMode: "class", // Enable dark mode using the "class" strategy
  theme: {
    extend: {}, // Extend Tailwind's theme if needed
  },
  plugins: [
    addVariablesForColors, // Add your custom plugin
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors")); // Flatten color palette
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]) // Map colors to CSS variables
  );

  addBase({
    ":root": newVars, // Add CSS variables to the :root selector
  });
}
