const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/[hash][ext][query]",
				}, // To use the image file in html files
			},
		],
	},
	devtool: "source-map",
	devServer: {
		static: {
			directory: path.resolve(__dirname, "./src/assets"),
			publicPath: "/assets",
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
			inject: "head",
			scriptLoading: "defer",
		}),
	],
};
