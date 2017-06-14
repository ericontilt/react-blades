/* eslint no-param-reassign:0, import/no-extraneous-dependencies:0 */
const path = require('path');

module.exports = (config) => {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'test/components/**/*',
    ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [{
          test: /\.jsx?$/,
          enforce: 'pre',
          loader: 'source-map-loader'
        }, {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: [
            path.join(__dirname, 'src/js'),
            path.join(__dirname, 'test'),
            require.resolve('airbnb-js-shims'),
          ],
          exclude: [
            path.resolve(__dirname, 'node_modules')
          ],
          query: {
            presets: ['airbnb'],
          },
        }, {
          // Inject the Airbnb shims into the bundle
          test: /test\/_helpers/, loader: 'imports-loader?shims=airbnb-js-shims',
        }],
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      externals: {
        'cheerio': 'window',
        'react/addons': 'react',
        'react-test-renderer/shallow': 'react',
        'react/lib/ExecutionEnvironment': 'react',
        'react/lib/ReactContext': 'react'
      }
    },

    webpackMiddleware: {
      progress: false,
      stats: false,
      debug: false,
      quiet: true,
    },

    preprocessors: {
      'test/**/*': ['webpack'],
    },

    reporters: ['spec'],

    specReporter: {
      showSpecTiming: true,
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome'],
    captureTimeout: 60000,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 60000,

    singleRun: true,

    concurrency: Infinity,
  });
};
