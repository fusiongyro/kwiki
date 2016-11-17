var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin()]
};
