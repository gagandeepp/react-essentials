var path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
      },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        }
      ]
    }
  };