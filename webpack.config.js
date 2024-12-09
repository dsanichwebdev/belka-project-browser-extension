const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    content: './public/content-scripts/index.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
    },
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/icons', to: 'icons' },
        { from: 'public/background.js', to: 'background.js' },
        { from: 'public/manifest.json', to: 'manifest.json' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
    }),
  ],
  mode: 'production',
  devtool: 'source-map',
};
