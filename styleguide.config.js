module.exports = {
  components: 'src/components/*/*.js',
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader' // creates style nodes from JS strings
            }, 
            {
              loader: 'css-loader?modules' // translates CSS into CommonJS
            }, 
            {
              loader: 'less-loader' // compiles Less to CSS
            }
          ]
        },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
      ]
    }
  }
}