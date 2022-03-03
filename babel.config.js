module.exports = function(api) {
  api.cache(true);
  api.assertVersion('7.17.5');

  const presets = [
    "@babel/preset-typescript",
    ["@babel/preset-env", {"targets": {"esmodules": true}}],
    ["@babel/preset-react",
      {
        "pragma": "dom",
        "pragmaFrag": "DomFrag",
        "throwIfNamespace": false,
        "runtime": "classic"
      }],
    ["@babel/preset-flow"]
  ];

  const plugins = [
    ["@babel/plugin-transform-modules-commonjs"],
    ["@babel/plugin-transform-destructuring"],
    ["@babel/plugin-proposal-export-default-from"],
    ["@babel/plugin-proposal-export-namespace-from"],
    ["@babel/plugin-proposal-object-rest-spread"],
    ["@babel/plugin-transform-template-literals"],
    ["@babel/plugin-transform-classes"],
    ["@babel/plugin-proposal-class-properties"],

    ["@babel/plugin-transform-runtime", {
      "absoluteRuntime": false,
      "corejs": false,
      "helpers": true,
      "regenerator": true,
      "version": "7.0.0-beta.0"
    }], 
  ];

  return {
    presets,
    plugins
  }
}