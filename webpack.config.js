const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  filename: "./public/index.html"
});

const config = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/',
		filename: 'dist/main.js',
	},
	devServer: {
		contentBase: './public',
		port: 3000,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
		]
	},
	resolve: {
		alias: {
			components: path.resolve(__dirname, 'src/components'),
			config: path.resolve(__dirname, 'src/config'),
			views: path.resolve(__dirname, 'src/views'),
		},
	},
	plugins: [htmlPlugin],
	devtool: 'source-maps'
};

module.exports = config;
