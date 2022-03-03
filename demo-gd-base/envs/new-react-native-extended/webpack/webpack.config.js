const WorkboxPlugin = require('workbox-webpack-plugin');
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
  plugins: [
    new WorkboxPlugin.GenerateSW({
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],
      runtimeCaching: [{
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 10,
          },
        },
      }],
    }) 
  ],
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

