var testsContext;

require('babel-core/polyfill');
require('angular');
require('angular-mocks');

testsContext = require.context('./app', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);