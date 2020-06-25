/**
 * Configure the Jest babel options to transpile Gastby properly.
 */

const babelOptions = {
  presets: ["babel-preset-gatsby"],
}

module.exports = require("babel-jest").createTransformer(babelOptions)
