/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { ubuntu: ["ubuntu", "ui-sans-serif"] },
    colors: {
      MarineBlue: "var(--MarineBlue)",
      PurplishBlue: "var(--PurplishBlue)",
      PastelBlue: "var(--PastelBlue)",
      LightBlue: "var(--LightBlue)",
      StrawberryRed: "var(--StrawberryRed)",
      CoolGray: "var(--CoolGray)",
      LightGray: "var(--LightGray)",
      Magnolia: "var(--Magnolia)",
      Alabaster: "var(--Alabaster)",
      White: "var(--White)",
      NavBg: "var(--NavBg)",
      NavText: "var(--NavText)",
    },
  },
  plugins: [],
};
