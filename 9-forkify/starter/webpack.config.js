const path = require('path');
const webpackHTMLPlugin= require('html-webpack-plugin');

module.exports={
    entry: ['./src/js/index.js','babel-polyfill'],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase:'./dist'
    },
    plugins: [ new webpackHTMLPlugin({
        filename:'index.html',
        template:'./src/index.html'
    })],
    module: {
        rules: [
           {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                   loader: 'babel-loader'
               } 
           }     

        ]

    }
}