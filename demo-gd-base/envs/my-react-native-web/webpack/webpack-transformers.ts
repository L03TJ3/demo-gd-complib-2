
  import { WebpackConfigTransformer, WebpackConfigMutator, WebpackConfigTransformContext } from '@teambit/webpack';

  const webpackConfig = require('./webpack.config.js')
  /**
   * Transformation to apply for both preview and dev server
   * @param config
   * @param _context
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function commonTransformation(config: WebpackConfigMutator, _context: WebpackConfigTransformContext) {
    // Merge config with the webpack.config.js file if you choose to import a module export format config.
    config.merge([webpackConfig]);
    // config.addAliases({});
    // config.addModuleRule(youRuleHere);
    config.addAliases({
      react: require.resolve('react'),
      'react-dom/server': require.resolve('react-dom/server'),
      'react-native$': require.resolve('react-native-web')
    })
    return config;
  }

  /**
   * Transformation for the preview only
   * @param config
   * @param context
   * @returns
   */
  export const previewConfigTransformer: WebpackConfigTransformer = (
    config: WebpackConfigMutator,
    context: WebpackConfigTransformContext
  ) => {
    const newConfig = commonTransformation(config, context);
    return newConfig;
  };

  /**
   * Transformation for the dev server only
   * @param config
   * @param context
   * @returns
   */
  export const devServerConfigTransformer: WebpackConfigTransformer = (
    config: WebpackConfigMutator,
    context: WebpackConfigTransformContext
  ) => {
    const newConfig = commonTransformation(config, context);
    return newConfig;
  };

