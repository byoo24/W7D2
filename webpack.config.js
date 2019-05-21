const path = require('path');

module.exports = {

    mode: 'development',
    context: __dirname,
    entry: './frontend/src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        // creates style nodes from JS strings
                        loader: "style-loader", options: { sourceMap: true }
                    }, 
                    {
                        // translates CSS into CommonJS
                        loader: "css-loader", options: { sourceMap: true }
                    }, 
                    {
                        // compiles Sass to CSS, using Node Sass by default
                        loader: "sass-loader", options: { sourceMap: true }
                    }
                ]
            }
        ]
    }
};