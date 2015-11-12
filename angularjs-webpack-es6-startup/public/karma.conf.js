var path = require('path');

var include = [
  path.resolve('./app')
];

var preLoaders = [
  {test: /\.spec\.js$/, loader: 'babel', include: include},
  {test: /\.js$/, loader: 'isparta', include: include, exclude: /\.spec\.js$/}
];
var loaders = [
  {test: /\.png$/, loader: 'null'},
  {test: /\.jpg$/, loader: 'null'},
  {test: /\.json$/, loader: 'json'},
  {test: /\.html$/, loader: 'ngtemplate!html'}
];


module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'spec.js'
    ],
    webpack: {
      devtool: 'eval',
      module: {
        loaders: loaders,
        preLoaders: preLoaders
      },
      cache: true
    },
    webpackMiddleware: {
      stats: {
        chunkModules: false,
        colors: true
      }
    },
    preprocessors: {
      'spec.js': ['webpack']
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage/',
      subdir: '.',
      reporters: [
        {type: 'cobertura', file: 'cobertura.xml'},
        {type: 'text', file: 'text.txt'},
        {type: 'text-summary', file: 'text-summary.txt'},
        {type: 'html'}
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};