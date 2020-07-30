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
        require('@fullhuman/postcss-purgecss')({
            content: [
                '../**/*.html',
                '../**/*.js',
            ],
            defaultExtractor: content => {
                // Capture as liberally as possible, including things like `h-(screen-1.5)`
                const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
            
                // Capture classes within other delimiters like .block(class="w-1/2") in Pug
                const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
            
                return broadMatches.concat(innerMatches)
            },
        }),
        require("postcss-css-variables")
    ],
}