
module.exports = {
    entry: "./src/index.js",
    output: {
        path: "./dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 7777
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /{node_modules}/,
            loader: ["babel-loader"],
            query: {
                presets: ["latest", "stage-0", "react"]
            }
        }
    ]
    }
};