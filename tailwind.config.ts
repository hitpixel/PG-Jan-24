import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config

