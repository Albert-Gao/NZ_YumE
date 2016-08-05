var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
    entry: {
        'scripts/emulator.bundle.js':'./src/emulator/ui/emulator.ts',
        'css/index.css':'./src/emulator/ui/css/index.css'
    },
    output: {
        path: './dist/',
        filename: '[name]'
    },
    resolve: {
        extension:['','.ts','.js']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css-loader?sourceMap")
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/index.css',{allChunks:false}),
        new webpack.optimize.UglifyJsPlugin()
    ]
}
