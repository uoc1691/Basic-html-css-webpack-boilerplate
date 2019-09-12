const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        watchContentBase: true,
        contentBase: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            // Now we apply rule for images
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
                   {
                     // Using file-loader for these files
                     loader: "file-loader"
                   }
                 ]
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Development",
            template: "./src/html/index.html" 
        })
    ]
    
}