var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
/*
module.exports = {
    entry: {
        'scripts/emulator.bundle.js':'./temp/emulator/ui/emulator.js',
        'css/index.css':'./temp/emulator/ui/css/index.css'
    },
    output: {
        path: './dist/',
        filename: '[name]'
    },
    resolve: {
        extension:['','.js']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css-loader?sourceMap")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/index.css',{allChunks:false}),
        new webpack.optimize.UglifyJsPlugin()
    ]
}
*/
//Below is a configuration for transpile ts directly to js
module.exports = {
    context: __dirname + "/src/",
    entry: {
        './scripts/emulator.bundle.js':'./emulator/ui/emulator.ts',
    },
    output: {
        path: __dirname+'/dist/',
        filename: '[name]'
    },
    resolve: {
        extension:['','.ts','.js']
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css-loader")
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
