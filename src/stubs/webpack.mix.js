let mix = require('laravel-mix');
require('laravel-mix-purgecss');

mix.options({
        processCssUrls: false,
        postCss: [
            require('tailwindcss')(),
        ]
    })
    .js('resources/js/app.js', 'public/js')
    .less('resources/less/app.less', 'public/css')
    .purgeCss();

if (mix.inProduction()) {
    mix.version();
}
