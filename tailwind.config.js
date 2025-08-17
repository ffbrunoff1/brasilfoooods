/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF0E5',
          100: '#FFE6CC',
          200: '#FFCC99',
          300: '#FFB366',
          400: '#FF9933',
          500: '#FF8000', // Principal (Laranja vibrante, remete a comida e energia)
          600: '#CC6600',
          700: '#994D00',
          800: '#663300',
          900: '#331A00',
        },
        secondary: {
          50: '#E6F0E6',
          100: '#CCE6CC',
          200: '#99CC99',
          300: '#66B366',
          400: '#339933',
          500: '#008000', // Complementar (Verde vivo, remete a frescor e saúde)
          600: '#006600',
          700: '#004D00',
          800: '#003300',
          900: '#001A00',
        },
        accent: {
          50: '#F0F5FF',
          100: '#E0EFFF',
          200: '#C0DFFF',
          300: '#A0CCFF',
          400: '#80BFFF',
          500: '#60AFFF', // Destaque (Azul claro, remete a confiabilidade e clareza)
          600: '#488BCD',
          700: '#3069AB',
          800: '#18478A',
          900: '#002568',
        },
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
