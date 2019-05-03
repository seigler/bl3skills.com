const path = require('path');

exports.webpack = function (config, env) {
  let { production, webpack } = env;
  config.resolve.alias['@constants'] = path.resolve(__dirname, 'src/constants');
  config.resolve.alias['preact-compat'] = 'preact/compact';
}
