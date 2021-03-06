module.exports = function(api) {
  api.cache(true);
  api.assertVersion('7.17.5');

  const presets = [
    "module:metro-react-native-babel-preset",
    "@babel/preset-typescript",
    ["@babel/preset-env", {targets: {esmodules: true}}],
    ["@babel/preset-react",
      {
        // "pragma": "dom",
        // "pragmaFrag": "DomFrag",
        // "throwIfNamespace": false,
        "runtime": "automatic"
      }],
  ];
  const plugins = [
    ['@babel/plugin-transform-modules-commonjs'],
    ['@babel/plugin-transform-destructuring'],
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-proposal-decorators',{
      'decoratorsBeforeExport':true
    }],
    ['@babel/plugin-proposal-export-default-from'],
    ['@babel/plugin-proposal-export-namespace-from'],
    ['@babel/plugin-proposal-object-rest-spread'],
    ['@babel/plugin-transform-template-literals'],
    ['@babel/plugin-transform-classes'],
    ['@babel/plugin-transform-runtime', {
      "absoluteRuntime": false,
      "corejs": false,
      "helpers": true,
      "regenerator": true,
      "version": "7.0.0-beta.0"
    }]
  ];

  return {
    presets,
    plugins
  }
}


// {
//   "presets": ["@babel/preset-flow"]
// }

// {
// "plugins": ["    ['@babel/plugin-transform-runtime'],"]
//}