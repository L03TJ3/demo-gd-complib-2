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
                  presets: ['@babel/preset-env', '@babel/preset-react', 'module:metro-react-native-babel-preset'],
                  plugins: ['@babel/plugin-transform-classes']
              }
          },
      }
    ]
  },
  resolve: {
    extensions: [
      ".web.js",
      ".js",
      ".web.ts",
      ".ts",
      ".web.tsx",
      ".tsx",
      ".web.mjs",
      ".mjs"
    ]
  }
}

// resolve: {
//   extensions: [
//     '.web.tsx',
//     '.web.ts',
//     '.tsx',
//     '.ts',
//     '.web.jsx',
//     '.web.js',
//     '.jsx',
//     '.js',
//   ], // read files in fillowing order
//   alias: Object.assign({
//     'react-native$': 'react-native-web',
//   }),
// }

// module.exports = config

// module.export = {
//     rules: [
//       {
//           test: /\.tsx?$/,
//           use: {
//               loader: 'ts-loader',
//               options: {
//                   appendTsSuffixTo: [/\.jsx$/],
//               },
//           },
//           exclude: /node_modules/,
//       },
//       {
//           test: /\.(js|jsx)?$/,
//           exclude: /node_modules/,
//           use: {
//               loader: 'babel-loader',
//               options: {
//                   presets: ['@babel/preset-env', '@babel/preset-react'],
//                   plugins: ['@babel/plugin-transform-classes']
//               }
//           },
//       }
//   ]
// }