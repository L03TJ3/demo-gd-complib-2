module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: {
          loader: 'ts-loader',
          options: {
              appendTsSuffixTo: [/\.jsx$/],
          }
        },
        exclude: /node_modules/,
      },
      {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader',
              options: {
                rootMode: "upward",
              }
          },
      }
    ]
  },
  resolve: {
    extensions: [
      ".web.js",
      ".js",
      ".d.js",
      ".web.ts",
      ".ts",
      ".web.tsx",
      ".tsx",
      ".web.mjs",
      ".mjs"
    ]
  }
}

