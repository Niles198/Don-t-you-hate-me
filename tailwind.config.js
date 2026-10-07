/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { sky: { DEFAULT: '#75ABF4', deep: '#4F8DE0', light: '#A9CCFA' }, ink: '#1F2A44', pop: '#FF6B8B', sun: '#FFD25E' },
      fontFamily: { display: ['"Baloo 2"', 'system-ui', 'sans-serif'], body: ['Nunito', 'system-ui', 'sans-serif'] },
      boxShadow: { chunk: '0 6px 0 0 rgba(31,42,68,.18)', card: '0 18px 40px -12px rgba(31,42,68,.35)' },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        pop: { '0%': { transform: 'scale(.6)', opacity: '0' }, '70%': { transform: 'scale(1.08)' }, '100%': { transform: 'scale(1)', opacity: '1' } },
        rise: { '0%': { transform: 'translateY(0) scale(.6)', opacity: '0' }, '15%': { opacity: '.9' }, '100%': { transform: 'translateY(-105vh) scale(1.1)', opacity: '0' } },
        slide: { '0%': { transform: 'translateX(28px)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
      },
      animation: { float: 'float 3.2s ease-in-out infinite', pop: 'pop .55s cubic-bezier(.2,1.2,.4,1) both', rise: 'rise 9s linear infinite', slide: 'slide .35s ease-out both' },
    },
  },
  plugins: [],
}
