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
            options: { modules: false }
          },
          "sass-loader"
        ]
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
