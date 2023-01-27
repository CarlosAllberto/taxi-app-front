module.exports = function(api) {
  api.cache(true);
  return {
    "presets": ['babel-preset-expo'],
    "plugins": [
      'react-native-reanimated/plugin',
      ["module-resolver", {
        "root": ["./"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        "alias": {
          "@screens": "./src/screens",
          "@components": "./src/components",
          "@helpers": "./src/helpers",
          "@assets": "./assets",
          "underscore": "lodash"
        }
      }],
    ],
  };
};
