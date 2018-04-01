let mix = require('laravel-mix');
require('laravel-mix-purgecss');

mix.options({
        processCssUrls: false,
        postCss: [
            require('tailwindcss')(),
        ]
    })
    .js('resources/assets/js/app.js', 'public/js')
    .less('resources/assets/less/app.less', 'public/css')
    .purgeCss();

if (mix.inProduction()) {
    mix.version();
}
