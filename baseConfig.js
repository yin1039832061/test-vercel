module.exports = {
  base: {
    AppId: 'cloud-service-web',
    publicRuntimeConfig: {
      API_URL: 'https:www.xgd.com',
    },
  },
  dev: {
    publicRuntimeConfig: {
      API_URL: 'https:dev.xgd.com',
    },
  },
  fat: {
    publicRuntimeConfig: {
      API_URL: 'https:fat.xgd.com',
    },
  },
  prod: {
    publicRuntimeConfig: {
      API_URL: 'https:prod.xgd.com',
    },
  },
};
