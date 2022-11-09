const withAntdLess = require('next-plugin-antd-less');
const path = require('path');
const { mergeConfig } = require('./utils/mergeConfig');
const defaultConfig = mergeConfig();
module.exports = withAntdLess({
  lessVarsFilePathAppendToEndOfContent: true,
  publicRuntimeConfig: {
    ...(defaultConfig['publicRuntimeConfig'] || {}),
  },
  swcMinify: false,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@/utils': path.resolve(__dirname, 'utils'),
      components: path.resolve(__dirname, 'components'),
    };
    return config;
  },
});
