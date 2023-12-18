const CracoLessPlugin = require('craco-less');
const path = require('path')
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'rgb(22, 200, 200)' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  }
};