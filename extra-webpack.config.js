const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackMerge = require("webpack-merge");
const webpack = require('webpack');
const path = require('path');
/**
 *  Single-spa will not load scripts from angular.json that must be included in index.html but it will loads styles.
 *  So, written this function to copy external js what application used into dist/assets/externalJs folder by copy-webpack-plugin
 *  and load them by <script> tab in index.html.
 */
function loadExternalJs () {
  const externalJs = [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/tooltipster/dist/js/tooltipster.bundle.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
    "node_modules/hashmap/hashmap.js",
    "node_modules/tableexport.jquery.plugin/tableExport.min.js",
    "node_modules/tableexport.jquery.plugin/libs/FileSaver/FileSaver.min.js",
    "node_modules/tableexport.jquery.plugin/libs/js-xlsx/xlsx.core.min.js",
    "node_modules/tableexport.jquery.plugin/libs/jsPDF/jspdf.min.js",
    "node_modules/tableexport.jquery.plugin/libs/jsPDF-AutoTable/jspdf.plugin.autotable.js",
    "node_modules/tableexport.jquery.plugin/libs/es6-promise/es6-promise.auto.min.js",
    "node_modules/tableexport.jquery.plugin/libs/html2canvas/html2canvas.min.js",
    "node_modules/bootstrap-table/dist/bootstrap-table.min.js",
    "node_modules/bootstrap-table/dist/extensions/export/bootstrap-table-export.min.js",
    "node_modules/bootstrap-table/dist/extensions/print/bootstrap-table-print.min.js",
    "node_modules/bootstrap-switch/dist/js/bootstrap-switch.min.js"
  ];
  let jsonArray = new Array();
  for (let i = 0; i < externalJs.length; i++) {
    jsonArray.push({
      from: externalJs[i],
      to: 'assets/externalJs',
      toType: 'dir'
    });
  }
  return jsonArray;
};

const indexSingleSpaConfig = {
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist/dashboard-app')
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyWebpackPlugin(loadExternalJs())
  ]
};
module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)
  const mergedConfig = webpackMerge.smart(singleSpaWebpackConfig, indexSingleSpaConfig);
  // Feel free to modify this webpack config however you'd like to
  return mergedConfig
}

