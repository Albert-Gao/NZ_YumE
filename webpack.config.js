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
    context: __dirname+"/src",
    entry: {
        './index.bundle.js':['./emulator/ui/emulator.ts'],
        //in [] as workaround so can import for tests, see https://github.com/webpack/webpack/issues/300
        './index.bundle.css':'./emulator/ui/css/index.css',
        './spec/test.spec.js':'../spec/test.spec.ts',
        './spec/test2.spec.js':'../spec/test2.spec.ts'
    },
    output: {
        path: __dirname+'/dist',
        filename: '[name]'
    },
    resolve: {
        extensions:['','.css','.ts','.js']
    },
    devtool:"source-map",
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css-loader"),
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name]',{allChunks:false}),
        new webpack.optimize.UglifyJsPlugin()
    ]
}
