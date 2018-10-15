module.exports = {
    entry: "./src/app.js",
    output: {
      filename: "bundle.js",
      publicPath: 'http://localhost:8080/dist/'
    }, 
    watch: true,
    // Automatically reload the page when compilation is done.
    devServer: {
        inline: true
    },
    mode: 'production',
    
    module: {
        rules: [
          {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
          }
        ]
      }
  }