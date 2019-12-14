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
  plugins: [htmlPlugin],
};

module.exports = config;
