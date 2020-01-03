const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  entry: './ts/src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new WasmPackPlugin({
      outName: 'wasm',
      crateDirectory: path.resolve(__dirname, '.'),
      watchDirectories: [path.resolve(__dirname, 'rs/src')],
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin(['res']),
  ],
  devServer: {
    writeToDisk: true,
  },
};
