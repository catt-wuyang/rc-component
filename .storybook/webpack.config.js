const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("ts-loader"),
      },
    ],
  });
  config.module.rules.push({
    test: /\.(css|scss)$/,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
      },
      {
        loader: "sass-loader",
        options: {
          implementation: require("sass"),
        },
      },
    ],
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
