/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        'body-bg': 'hsl(var(--clr-body-bg) / <alpha-value>)',
        'mark-bg': 'hsl(var(--clr-mark-bg) / <alpha-value>)',
        'toggle-bg': 'hsl(var(--clr-toggle-bg) / <alpha-value>)',
        'toggle-mark-regular-fill':
          'hsl(var(--clr-toggle-mark-regular-fill) / <alpha-value>)',
        'toggle-mark-regular-bg':
          'hsl(var(--clr-toggle-mark-regular-bg) / <alpha-value>)',
        'toggle-mark-checked-fill':
          'hsl(var(--clr-toggle-mark-checked-fill) / <alpha-value>)',
        'toggle-mark-checked-bg':
          'hsl(var(--clr-toggle-mark-checked-bg) / <alpha-value>)',
        'header-text': 'hsl(var(--clr-header-text) / <alpha-value>)',
        'side-note-text': 'hsl(var(--clr-side-note-text) / <alpha-value>)',
        'player-bg': 'hsl(var(--clr-player-bg) / <alpha-value>)',
        'cpu-or-p2-bg': 'hsl(var(--clr-cpu-or-p2-bg) / <alpha-value>)',

        'header-turn-text': 'hsl(var(--clr-header-turn-text) / <alpha-value>)',
        'header-turn-bg': 'hsl(var(--clr-header-turn-bg) / <alpha-value>)',
        'header-restartBtn-bg':
          'hsl(var(--clr-header-restartBtn-bg) / <alpha-value>)',

        'grid-bg': 'hsl(var(--clr-grid-bg) / <alpha-value>)',

        'scoreboard-text': 'hsl(var(--clr-scoreboard-text) / <alpha-value>)',
        'scoreboard-x-bg': 'hsl(var(--clr-scoreboard-x-bg) / <alpha-value>)',
        'scoreboard-o-bg': 'hsl(var(--clr-scoreboard-o-bg) / <alpha-value>)',
        'scoreboard-ties-bg':
          'hsl(var(--clr-scoreboard-ties-bg) / <alpha-value>)',
      },

      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },

      spacing: {
        measure: '600px',
      },
    },
  },
  plugins: [],
};
