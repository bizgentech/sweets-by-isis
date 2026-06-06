import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9d3c5d',
        'primary-light': '#e8789a',
        accent: '#fdcf49',
        surface: '#fff8f8',
        'surface-yellow': '#fff8e6',
        plum: '#22191b',
        lilac: '#f3e8ff',
        muted: '#8a6070',
        'border-rose': '#f5c8d8',
        'outline-rose': '#dac0c5',
      },
      fontFamily: {
        garamond: ['var(--font-garamond)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '30px',
        card: '20px',
        'card-sm': '16px',
      },
      boxShadow: {
        bloom: '0px 10px 30px rgba(138, 96, 112, 0.08)',
        'bloom-md': '0px 15px 40px rgba(138, 96, 112, 0.12)',
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        section: '80px',
        'section-mobile': '40px',
      },
    },
  },
  plugins: [],
}
export default config
