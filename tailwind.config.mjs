/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pharmacy-green': '#008000', // A standard green
        'pharmacy-light-green': '#90EE90', // Light green
        'pharmacy-white': '#FFFFFF', // White
        'pharmacy-gray': '#D3D3D3', // Light gray
      },
    },
    animation: {
      "fade-in": "fadeIn 0.75s ease-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0, transform: "translateY(10px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "esmerald",
    themes: ["acid","esmerald"],
  },
};
