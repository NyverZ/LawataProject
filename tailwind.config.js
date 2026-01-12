export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  safelist: [
    {
      pattern: /dark:/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
