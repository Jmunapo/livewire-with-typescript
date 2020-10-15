const mix = require('laravel-mix');



mix.js('resources/js/livewire.js', 'public/dest/js')
    .webpackConfig({
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }]
        },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
        }
    });
// .postCss('resources/css/app.css', 'public/css', [
//     //
// ]);