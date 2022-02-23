module.export = {
  rules: [
    {
      rules: [
        {
            test: /\.tsx?$/,
            use: {
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.jsx$/],
                },
            },
            exclude: /node_modules/,
        },
        {
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-transform-classes']
                }
            },
        }
    ]
    }
  ]
}