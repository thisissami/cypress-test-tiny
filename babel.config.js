module.exports = function (api) {
  // TODO: Choose a babel configuration caching strategy.
  // See https://babeljs.io/docs/en/config-files#apicache
  api.cache(false);

  const presets = [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          firefox: '66',
          chrome: '76',
        },
        shippedProposals: true,
      },
    ],
  ];

  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    'react-hot-loader/babel',
    [
      // https://ant.design/docs/react/getting-started#Import-on-Demand
      'import',
      {
        libraryName: 'antd',
        style: true,
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
