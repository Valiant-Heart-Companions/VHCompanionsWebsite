/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Lora', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        forest: {
          50:  '#f0f7f3',
          100: '#dceee5',
          200: '#badece',
          300: '#8ec7b0',
          400: '#5ea98d',
          500: '#3b8c6e',
          600: '#3b6e52',
          700: '#2a4f3b',
          800: '#1e3829',
          900: '#152619',
        },
        rose: {
          deep: '#8b3a4f',
          dark: '#6d2d3e',
        },
        amber: {
          warm: '#d4861b',
          dark: '#b06a12',
        },
        linen: {
          DEFAULT: '#faf7f2',
          100: '#f2ede6',
          200: '#e8e2d9',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        vhc: {
          'primary':          '#3b6e52',
          'primary-content':  '#ffffff',
          'secondary':        '#8b3a4f',
          'secondary-content':'#ffffff',
          'accent':           '#d4861b',
          'accent-content':   '#2d2416',
          'neutral':          '#2d2416',
          'neutral-content':  '#faf7f2',
          'base-100':         '#faf7f2',
          'base-200':         '#f2ede6',
          'base-300':         '#e8e2d9',
          'base-content':     '#2d2416',
          'info':             '#0284c7',
          'info-content':     '#ffffff',
          'success':          '#3b6e52',
          'success-content':  '#ffffff',
          'warning':          '#d4861b',
          'warning-content':  '#2d2416',
          'error':            '#8b3a4f',
          'error-content':    '#ffffff',
        },
      },
    ],
    darkTheme: false,
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
};
