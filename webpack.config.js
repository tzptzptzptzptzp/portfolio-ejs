const path = require("path");

module.exports = {
    devtool: "hidden-source-map",
    target: ["web", "es5"],
    entry: {
        index: "./src/index.ts"
    },
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
            },
        ],
    },
    resolve: {
        extensions: [
            ".ts", ".js",
        ],
    },
};