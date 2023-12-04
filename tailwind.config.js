module.exports = {
  content: [], // An array to store content data (if needed).
  theme: { // Configuration for the Tailwind CSS theme.
    extend: { // Extending the default theme.
      colors: {
        'primary-1-1': '#FF86C8', // Custom primary color variant 1.
        'primary-2-1': '#FFA3A5', // Custom primary color variant 2.
        'secondary-1-1': '#FFBF81', // Custom secondary color variant 1.
        'secondary-2-1': '#000000', // Custom secondary color variant 2.
        'grey': "#D9D9D9" // Custom gray color.
      },
    },
  },
  plugins: [], // Any additional Tailwind CSS plugins can be added here.
}