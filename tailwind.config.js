/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: '#F8FAFC',
        dark: '#0F172A',
        primary: {
          '50': '#E0F7FF',
          '100': '#B3EEFF',
          '200': '#80E5FF',
          '300': '#4DDBFF',
          '400': '#26D2FF',
          '500': '#00B4D8',
          '600': '#0095B3',
          '700': '#00768F',
          '800': '#00576A',
          '900': '#003845',
        },
        secondary: {
          '50': '#E6EFFF',
          '100': '#B3D1FF',
          '200': '#80B3FF',
          '300': '#4D95FF',
          '400': '#2682FF',
          '500': '#38BDF8',
          '600': '#0057CC',
          '700': '#0043A8',
          '800': '#003380',
          '900': '#002357',
        },
        success: {
          '500': '#10B981',
        },
        warning: {
          '500': '#F59E0B',
        },
        error: {
          '500': '#EF4444',
        },
        // Added customBlue here:
        customBlue: 'rgba(55, 112, 193, 1)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};
