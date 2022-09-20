/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {}
  },
  plugins: [],
  corePlugins: { preflight: false }
};
