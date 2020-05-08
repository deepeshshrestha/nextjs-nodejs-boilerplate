const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");
const path = require("path");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

module.exports = withImages(
  withCSS({
    webpack(config) {
      config.resolve.alias["components"] = path.join(
        __dirname,
        "src/components"
      );
      config.resolve.alias["theme"] = path.join(__dirname, "src/theme");
      config.resolve.alias["utils"] = path.join(__dirname, "src/utils");
      config.resolve.alias["pages"] = path.join(__dirname, "src/pages");
      config.resolve.alias["constant"] = path.join(__dirname, "src/constant");
      // For enviroment variables
      config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

      return config;
    },
  })
);
