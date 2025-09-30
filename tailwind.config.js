/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        art: {
          background: "rgba(var(--art-background))",
          surface: "rgba(var(--art-surface))",
          primary: "rgba(var(--art-primary))",
          secondary: "rgba(var(--art-secondary))",
          on: {
            background: "rgba(var(--art-on-background))",
            surface: "rgba(var(--art-on-surface))",
            primary: "rgba(var(--art-on-primary))",
            secondary: "rgba(var(--art-on-secondary))",
          },
        },
      },
    },
  },
  plugins: [],
};
