const path = require("path");

module.exports = function override(config, env) {
  let loaders = config.module.rules[1].oneOf;
  loaders.splice(loaders.length - 1, 0, {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "src"),
    "@assets": path.resolve(__dirname, "src/assets"),
    "@components": path.resolve(__dirname, "src/components"),
  };

  return config;
};
