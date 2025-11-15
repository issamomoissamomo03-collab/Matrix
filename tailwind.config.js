/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#B30000',
        },
        graphite: '#2C2F38',
        lightGray: '#F5F5F5',
        accent: '#FFFFFF',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        heading: '600',
        'heading-bold': '700',
        body: '400',
        'body-medium': '500',
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(179, 0, 0, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(179, 0, 0, 0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}


