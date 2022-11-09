const config = require('../baseConfig');
const mergeConfig = () => {
  const env = process.env.APP_ENV || 'base';
  const curEnvConfig = config[env];
  const baseConfig = config['base'];
  return {
    ...baseConfig,
    ...curEnvConfig,
  };
};
module.exports = {
  mergeConfig,
};
