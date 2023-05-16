const path = require("path");
const package = require("./package");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  output: {
    filename: `umd/web3-abi.${package.version}.js`,
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "web3Abi",
      type: "umd",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"],
    },
  },
  module: {
    rules: [{ test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" }],
  },
  externals: {
    ethers: {
      root: "ethers",
      commonjs2: "ethers",
      commonjs: "ethers",
      amd: "ethers",
      umd: "ethers",
    },
    "web3-contract": {
      root: "web3Contract",
      commonjs2: "web3-contract",
      commonjs: "web3-contract",
      amd: "web3-contract",
      umd: "web3-contract",
    },
  },
  // plugins: [new BundleAnalyzerPlugin()],
};
