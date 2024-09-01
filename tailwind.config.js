/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**.html', 
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      screens: {
        "nav-fold-in": "960px"
      },
      dropShadow: {
        "custom-lg": "2px 2px 2px rgba(0,0,0,0.4)",
        "custom-sm": "1px 1px 1px rgba(0,0,0,0.5)"
      },
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
      colors: {
        custom: {
          light: {
            100: "#FFFFFF",
            200: "#E0E0E0",
            300: "#D3D3D3",
            400: "#AAAAAA"
          },
          dark: {
            500: "#121212",
            900: "#080808"
          }
        }
      },
    },
  },
  plugins: [],
};
