import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'target': 'linear-gradient(270deg, #CD0AED 0%, #510AE8 40.1%, #100CE8 100%)'
      },
      colors: {
        primary: "#111215",
        secondary: "#FFFFFF0D",
      }
    },
  },
  plugins: [],
}
export default config
