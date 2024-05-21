/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5ABCB9",
          secondary: "#1B4965",
          accent: "#82204A",
          neutral: "#7D8CA3",
          "base-100": "#F5EFED",
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
        primary: "#5ABCB9",
        secondary: "#1B4965",
        accent: "#82204A",
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
