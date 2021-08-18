/* eslint-disable func-names */
module.exports = function (api) {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env', {
        corejs: { version: 3 },
        useBuiltIns: 'usage',
        targets: {
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1',
          ie: '11',
        },
      },
    ],
  ];
  const plugins = [
    ['@babel/plugin-transform-template-literals'],
    ['@babel/plugin-transform-arrow-functions'],
    ['@babel/plugin-transform-runtime'],
  ];

  return {
    presets,
    plugins,
  };
};
