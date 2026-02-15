/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        mist: "#e6e9ef",
        navy: "#0b1020",
        glow: "#547bff",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(7, 11, 20, 0.55), 0 2px 8px rgba(7, 11, 20, 0.35)",
        glass: "0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 50px rgba(8, 12, 24, 0.5)",
      },
      backgroundImage: {
        glow: "radial-gradient(1000px 500px at 50% -10%, rgba(84, 123, 255, 0.18), transparent 60%)",
        noise: "var(--noise)",
      },
    },
  },
  plugins: [],
};
