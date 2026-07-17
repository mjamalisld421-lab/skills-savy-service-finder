/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#102a2a',
        evergreen: '#073b3a',
        mint: '#d9eee8',
        canvas: '#f7f8f4',
        coral: '#f47d61',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'Cambria', 'serif'],
      },
      boxShadow: {
        card: '0 18px 45px rgba(16, 42, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
