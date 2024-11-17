const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');  // Добавьте эту строку

module.exports = {
  entry: './public/content-scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Обработка .js и .jsx
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
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public/manifest.json', to: 'manifest.json' },  // Копируем manifest.json
      ],
    }),
  ],
};
