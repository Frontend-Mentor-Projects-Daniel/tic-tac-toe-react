/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        'body-bg': 'hsl(var(--clr-body-bg) / <alpha-value>)',
        'mark-bg': 'hsl(var(--clr-mark-bg) / <alpha-value>)',
        'player-bg': 'hsl(var(--clr-player-bg) / <alpha-value>)',
        'cpu-or-p2-bg': 'hsl(var(--clr-cpu-or-p2-bg) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
