// tailwind.config.js
module.exports = {
    theme: {
        fontFamily: {
            display: ['Roboto', 'sans-serif'],
            body: ['Roboto', 'sans-serif'],
        },
        colors: {
            white: '#fefefe',
            darkBlue: '#184999',
            blue: '#3b81c3',
            lightBlue: '#6babde',
            red: '#e73059',
        },
        screens: {
            'sm': '450px',
            // => @media (min-width: 640px) { ... }
            'md': '660px',
            // => @media (min-width: 768px) { ... }
            'lg': '1000px',
            // => @media (min-width: 1024px) { ... }
            'xl': '1200px',
            // => @media (min-width: 1280px) { ... }
            'xxl': '1600px',
            // => @media (min-width: 1280px) { ... }
            'xxxl': '2000px',
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            maxHeight: {
                '0': '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'full': '100%',
            },
            margin: {
                'screen': '100vw'
            },
            transitionProperty: {
                'spacing': 'margin, padding'
            }
        }
    },
    variants: {},
    plugins: [],
}
