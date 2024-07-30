/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-linear": "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.0) 20%, rgba(0, 0, 0, 0.0) 50%, rgba(0, 0, 0, 1) 94%)",
      },
    },
  },
  plugins: [],
};