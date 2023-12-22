/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "#f1f1f1": "#f1f1f1",
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
