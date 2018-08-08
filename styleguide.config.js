const path = require('path')
module.exports = {
  title: 'DCN UX Resources Documentation',
  pagePerSection: true,
  sections: [
    {
      name: 'Usage and Installation',
      content: 'README.md'
    },
    {
      name: 'Basics',
      content: 'src/components/Basics/Basics.md',
      components: 'src/components/Basics/*/*.js'
    },
    {
      name: 'Form',
      content: 'src/components/Form/Form.md',
      components: 'src/components/Form/*/*.js'
    },
    {
      name: 'Grid',
      content: 'src/components/Grid/Grid.md',
      components: 'src/components/Grid/*/*.js'
    },
    {
      name: 'Charts',
      content: 'src/components/Charts/Charts.md',
      components: 'src/components/Charts/*.js'
    }
  ],
  ignore: [
    '**/**/**/ProgressGraphics.js',
    '**/**/**/calendarData.js',
    '**/**/**/Charts.js',
    '**/**/**/Grid/Grid.js',
    '**/**/**/theme.js'
  ],
  styleguideDir: 'documentation',
  webpackConfig: {
    output: {
      publicPath: '../'
    },
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