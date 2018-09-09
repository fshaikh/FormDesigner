const rewireCssModules = require('react-app-rewire-css-modules');
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config = rewireCssModules(config, env);
    return config;  
  }
