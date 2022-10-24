/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./assets/**/*.js",
        "./index.html"
    ],
    theme: {
        fontFamily: {
            'Monts': ['Montserrat', 'sans-serif'],
            'Karla': ['Karla', 'sans-serif'],
            'Sans': ['Open Sans', 'sans-serif']
        },
        extend: {
            colors: {
                main: '#D2AC47',
            }
        },
    },
    plugins: [],
}
