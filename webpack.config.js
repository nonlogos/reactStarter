const path = require('path');

module.exports = env => {
	return {
		context: __dirname,
		entry: './js/index.js',
		devtool: env.prod ? 'source-map' : 'eval',
		output: {
			path: path.join(__dirname, '/public'),
			filename: 'bundle.js'
		},
		devServer: {
			publicPath: '/public',
			historyApiFallback: true
		},
		resolve: {
			extensions: ['.js', '.json'] //handles import with no extension with the following extension order
		},
		stats: {
		//what should webpack report on
			colors: true,
			reasons: true,
			chunks: true
		},
		module: {
		// all the transforms we want webpack to apply
			rules: [
				{
					enforce: 'pre', //before loading anything else
					test: /\.js$/,
					loader: 'eslint-loader',
					exclude: /node_modules/
				},
				{
					test: /\.json$/,
					loader: 'json-loader'
				},
				{   //if it passes this test then run it through babel loader
					include: path.resolve(__dirname, 'js'),
					test: /\.js$/,
					loader: 'babel-loader' 
				},
				{
					test: /\.scss$/,
					use: [ 
						'style-loader', 
						{
							loader: 'css-loader',
							options: {
								url: false
							}
						},
						{
							loader: 'postcss-loader'
						},
						{
							loader: 'sass-loader'
						} 
					]
				}

			]
		}

	}
}