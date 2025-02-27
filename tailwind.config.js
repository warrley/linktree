/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Garante que todo o src seja escaneado
    './src/pages/**/*.{js,ts,jsx,tsx}', // Adiciona a pasta de páginas
    './src/routes/**/*.{js,ts,jsx,tsx}', // Adiciona a pasta de rotas
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

