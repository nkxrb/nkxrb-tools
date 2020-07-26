'use strict';

module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/env",
      {
        "modules": false,
        "useBuiltIns": "usage",
        "corejs": "3"
      }
    ]
  ];
  const plugins = [
    [
      "module-resolver",
      {
        "root": ["src/"]
      }
    ]
  ];

  return {
    presets,
    plugins
  };
}