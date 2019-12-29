const { override, fixBabelImports, addLessLoader, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const path  = require('path');
module.exports = override(
  addDecoratorsLegacy(),
  /* 配置路径别名 */
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  /**antd 按需引入配置 */
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  /* 使用less修改主题（这样做可以相当于同时引入了less，不需要再webpack中配置） */
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  })
);