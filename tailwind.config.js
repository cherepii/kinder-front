/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ["'Noto Sans'"],
        'bebas-neue': ["'Bebas Neue'"],
      },
      
      colors: {
        'primary-text': "var(--primary-text-color)",
        'primary-text--hover': "var(--primary-hover-color)",
  
        'secondary-text': "var(--secondary-text-color)",
        'secondary-text--hover': "var(--secondary-hover-text-color)",
  
        'primary-accent': "var(--accent-color)",
        'primary-accent--hover': "var(--accent-hover-color)",
  
        'gray': "var(--gray-color)",
  
        'transparent': 'transparent',
        'success': "#14AE24",
        'error': "#D44C4C",
        'loading': "#64B2DD",
        "warning": "#F2B235",
      },
      dropShadow: {
        card: '-4px 6px 6px rgba(0, 0, 0, .50)',
        fold: '0 4px 6px rgba(0, 0, 0, .3)',
      },
      screens: {
        mob: '420px',
        '2xl': '1000px',
        xl: '780px',
        lg: '540px',
      }
    }
  },
  plugins: [],
};
