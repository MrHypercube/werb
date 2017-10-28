var webpack = require("webpack");

module.exports = {
    entry: __dirname + "/app/router.js",
    output: {
        path: __dirname + "/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: __dirname + "/dist",
        port: 3000
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: ["babel-loader"],
        }]
    }
}
