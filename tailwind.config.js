module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#e1e1e6",
          800: "#202024",
          700: "#29292e",
          900: "#121214"
        },

        purple: {
          light: "#996dff"
        }
      }
    }
  },
  plugins: []
};
