/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    container: {
      center: 'true',
      screens: {
        sm: '100%',
        md: '575px',
        lg: '767px',
        xl: '1025px',
        xxl: '1400px'
      }
    },
    screens: {
      sm: '575.98px',
      md: '767.98px',
      lg: '991.98px',
      xl: '1199.98px'
    }
  },
  plugins: [],
};
