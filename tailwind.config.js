/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*"],
  theme: {
    colors: {
      LimeGreen: " hsl(163, 72%, 41%)",
      BrightRed: "hsl(356, 69%, 56%)",
      Facebook: "hsl(208, 92%, 53%)",
      Twitter: "hsl(203, 89%, 53%)",
      YouTube: " hsl(348, 97%, 39%)",
      InstagramColor1: "hsl(37, 97%, 70%)",
      InstagramColor2: "hsl(329, 70%, 58%)",
      // Instagram: "linear-gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
      White: "hsl(0, 0%, 100%)",
      VeryPaleBlue: " hsl(225, 100%, 98%)",
      LightGrayishBlue: "hsl(227, 47%, 96%)",
      DarkGrayishBlue: "hsl(228, 12%, 44%)",
      VeryDarkBlue: " hsl(230, 17%, 14%)",
      DarkModeVeryDarkBlue: "hsl(232, 19%, 15%)",
      DarkDesaturatedBlue: "hsl(232, 19%, 15%)",
      DesaturatedBlue: "hsl(228, 34%, 66%)",
      Toggle: " hsl(230, 22%, 74%)",
      DarkModeToggle1: "hsl(210, 78%, 56%)",
      DarkModeToggle2: " hsl(146, 68%, 55%)",
    },
    extend: {
      screens: {
        xs: "375px",
      },
      letterSpacing: {
        wider: "0.28em",
      },
      fontWeight: {
        extrabold: 700,
      },
    },
  },
  plugins: [],
};
