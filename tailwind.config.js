/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Next.js App Router: Escaneia todos os arquivos .js, .ts, .jsx, .tsx, .mdx em 'app'
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    // Escaneia a pasta de componentes (onde está o Hero)
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Inclui a pasta pages também, por garantia
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}