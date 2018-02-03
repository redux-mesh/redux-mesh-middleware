const {HotModuleReplacementPlugin, NoEmitOnErrorsPlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {join} = require('path');

const port = 8080;

console.log(__dirname);

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        `./demo/app/index.tsx`
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    fix: true
                }
            },
            {
                test: /\.tsx?$/,
                loaders: ['awesome-typescript-loader?useBabel=true&useWebpackText=true&configFileName=demo/tsconfig.json'],
                include: [__dirname, join(__dirname, '..')]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },

    output: {
        publicPath: `http://localhost:${port}/`,
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },

    plugins: [
        new HotModuleReplacementPlugin(),
        new NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({template: 'demo/app/index.ejs'})
    ],

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
        modules: ['app', 'node_modules', 'webpack', 'browser', 'web', 'browserify', 'main']
    },

    externals: []
};