var path = require('path');
var webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const env = process.env.NODE_ENV;

const config = {
    mode: env || 'development'
};

module.exports = (env, argv) => {

    config.context = __dirname;

    config.entry = {
        admin:     './public/static/js/index', /* Admin Dashboard */
    };

    config.output = {
        path: path.resolve('./public/static/bundles'), /* Admin Dashboard */
        filename: "[name].js"
    };

    config.plugins = [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),

    ];

    config.performance = {
        hints: 'error'
    };

    config.module = {
        rules:  [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                // loader: require.resolve('css-loader'),
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ],
    };

    config.resolve = {
        modules: ['node_modules'],
        extensions: ['*', '.js', '.jsx', 'css']
    };

    config.performance = {
        hints: false,
    };

    if (argv.mode === 'production') {
        config.plugins.push(
            new webpack.DefinePlugin({
                // TODO Edit Production configurations
                'env': {
                    'dir': '"admin"',
                    'public_url': '"http://laravel-erp.herokuapp.com"',
                },
            }),
        );
        config.optimization = {
            minimizer: [
                new TerserPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true, // Must be set to true if using source-maps in production
                    terserOptions: {
                        ecma: undefined,
                        warnings: false,
                        comments: false,
                        beautify: false,
                        parse: {},
                        compress: {
                            drop_console: true,
                            warnings: false,
                        },
                        mangle: true, // Note `mangle.properties` is `false` by default.
                        module: false,
                        output: null,
                        toplevel: false,
                        nameCache: null,
                        ie8: false,
                        keep_classnames: undefined,
                        keep_fnames: false,
                        safari10: false,
                    }
                }),
            ],
        }
    } else {
        config.plugins.push(
            new webpack.DefinePlugin({
                // TODO Edit dev configurations as per your preference.
                'env': {
                    'dir': '"/erp/public/admin"',
                    'public_url': '"http://localhost:8080/erp/public/"',
                },
            }),
        )
    }

    return config;
};