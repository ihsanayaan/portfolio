/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgDark: "#1f1f20",
        bgDarkAlt: "#111827",
        textMain: "#E0E0E0",
        textSub: "#A0A0A0",
        borderLight: "#4EC6F1",
        accent: "#2F80ED",
        accentLight: "#80D0FF",
      },
      borderRadius: {
        soft: "8px",
      },
      spacing: {
        md: "16px",
      },
    },
  },
  plugins: [],
};
