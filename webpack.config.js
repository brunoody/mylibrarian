module.exports = {
    entry: './src/app.jsx',
    output: {
      path: __dirname + '/public',
      filename: './bundle.js'
    },
    devServer: {
      port: 8080,
      contentBase: './public'
    },
    module: {
      rules: [
        {
          test : /\.(js|jsx)$/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test : /\.css$/,
          use: [ 'style-loader', 'css-loader' ],
          exclude: /node_modules/
        }
      ]
    }
  };