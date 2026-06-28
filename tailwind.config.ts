import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx'
  ],
  theme: {
    extend: {
      colors: {
        porcelain: 'rgb(var(--porcelain-rgb) / <alpha-value>)',
        paper: 'rgb(var(--paper-rgb) / <alpha-value>)',
        roast: 'rgb(var(--roast-rgb) / <alpha-value>)',
        tamarind: 'rgb(var(--tamarind-rgb) / <alpha-value>)',
        rubine: 'rgb(var(--rubine-rgb) / <alpha-value>)',
        boho: 'rgb(var(--boho-rgb) / <alpha-value>)',
        camel: 'rgb(var(--camel-rgb) / <alpha-value>)'
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif']
      },
      maxWidth: {
        reading: '70ch',
        editorial: '1180px'
      }
    }
  },
  plugins: []
};

export default config;
