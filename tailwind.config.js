/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6494AA",

          secondary: "#4E6766",

          accent: "#CD5D67",

          neutral: "#7D8CA3",

          "base-100": "#FFFBFC",

          info: "#54457F",

          success: "#44AF69",

          warning: "#E28413",

          error: "#F4463F",
        },
      },
    ],
  },
  content: [
    "./app/javascript/**/*.{html,js,ts,jsx,tsx}",
    "./app/assets/stylesheets/**/*.css",
    "./app/views/**/*.{html,html.erb,erb}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6494AA",
        secondary: "#4E6766",
        accent: "#CD5D67",
        neutral: "#7D8CA3",
        info: "#54457F",
        success: "#44AF69",
        warning: "#E28413",
        error: "#F4463F",
      },
    },
    colors: {
      white: "#FFFBFC",
    },
  },
  plugins: [require("daisyui")],
};
