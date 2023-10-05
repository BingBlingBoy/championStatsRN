/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/**/**/*.{js,ts,jsx,tsx}",
        './src/*.{js,ts,jsx,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],  
    theme: {
        extend: {
            fontFamily: {

            },
            colors: {
                primary: '#2d1c63',
                secondary: '#ead3f3',
                white: '#FFFFFF',
                accent: '#9e37c3',
                black: '#000000',
                gray:  '#e5dedd'

            },

        },
    },
    plugins: [require('flowbite/plugin')],
}

