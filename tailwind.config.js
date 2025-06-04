/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',   // azul oscuro
        secondary: '#0ea5e9', // celeste
        accent: '#64748b',    // gris
      },
    },
  },
  plugins: [],
};
