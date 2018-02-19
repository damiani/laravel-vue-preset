let mix = require('laravel-mix');
require('laravel-mix-purgecss');

mix.js('resources/assets/js/app.js', 'public/js')
    .postCss('resources/assets/css/app.css', 'public/css')
    .options({
        postCss: [
            require('postcss-import')(),
            require('tailwindcss')(),
            require('postcss-cssnext')({
                features: { autoprefixer: false }
            }),
        ]
    })
    .purgeCss()
    .version();
