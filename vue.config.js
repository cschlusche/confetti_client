module.exports = {
    configureWebpack: {
      devtool: 'source-map',
    },
    devServer: {
      disableHostCheck: true,
      port: 8080,
      host: '127.0.0.1',
      public: '127.0.0.1:8080'
    },
  };