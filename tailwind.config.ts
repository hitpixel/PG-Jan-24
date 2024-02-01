import type { Config } from 'tailwindcss'

export default {
  content: ['./index.tsx', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config

