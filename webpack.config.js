/**
 * Created by huweijian on 2016/12/5.
 * @title
 */
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
const process = require('process');
// console.log(process.env);

var DEV = path.resolve(__dirname, "src" +process.env.NODE_SRC || '');
var OUTPUT = path.resolve(__dirname, "build" +process.env.NODE_SRC || '');

var config = {
    entry: DEV + "/index.js",
    output: {
        path: OUTPUT,
        filename: "app.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                include: DEV,
                loader: "babel"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: false,
                collapseWhitespace: false,
                removeAttributeQuotes: false
            }
        })
    ]
};

module.exports = config;
