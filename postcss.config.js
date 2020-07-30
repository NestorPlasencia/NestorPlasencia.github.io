module.exports = {
    plugins: [
        
        require('postcss-import')({ root: 'scr/css/*.css' }),
        require('postcss-color-function')({preserveCustomProps: true}),
        require('postcss-custom-media')(),
        require('postcss-extend'),
        require('postcss-nested'),
        require('precss'),
        require('postcss-hexrgba'),
        
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}