module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
          test: /\.(tsx|ts)?$/,
          use: {
              loader: 'ts-loader',
          },
          exclude: /node_modules/,
      },
      {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader',
              options: {
                "rootMode": "upward",
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