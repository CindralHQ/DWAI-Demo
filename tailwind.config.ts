import type { Config } from 'tailwindcss'
export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:'#eef7ff', 100:'#d9ecff', 200:'#b6d9ff', 300:'#8dc1ff', 400:'#60a3ff', 500:'#3c86f6', 600:'#2b69d1', 700:'#2353a8', 800:'#1f4689', 900:'#1d3a70'
        }
      }
    }
  },
  plugins: []
} satisfies Config
