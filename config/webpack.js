// Webpack configuration
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(s?)css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1, modules: true }
          },
          "sass-loader"
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.(png|jpg|jpeg|svg|webp|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
