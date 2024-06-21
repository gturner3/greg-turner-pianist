import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      // accent #32447B, gray #8B8D98, background #FFFFFF
      themes: {
        light: {
          colors: {
            foreground: {
              DEFAULT: '#1E1F24', // gray 12
            },
            primary: {
              DEFAULT: '#32447B', // accent 9
              foreground: '#FFFFFF', // white
            },
            secondary: {
              DEFAULT: '#4A65BF', // accent 11
            },
            focus: '#32447B', // accent 9
          },
        },
        dark: {
          colors: {
            foreground: {
              DEFAULT: '#EEEEF0', // gray 12
            },
            primary: {
              DEFAULT: '#4A65BF', // accent 9
              foreground: '#FFFFFF', // white
            },
            secondary: {
              DEFAULT: '#93B1FF', // accent 11
            },
            focus: '#4A65BF', // accent 9
          },
        },
      },
    }),
  ],
};
