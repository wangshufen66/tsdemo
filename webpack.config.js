const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './src/index.ts',
  output: {
    //指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),

    //打包后的文件
    filename: 'bundle.js',
  },
  mode: 'development',
  resolve: {
    //模块导入扩展名
    extensions: ['js', 'ts', 'tsx'],
  },
  //   devtool: 'cheap-module-eval-source-map',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(), //清空原来的dist中的文件，然后再生成新的文件（默认用新生成的文件覆盖之前的文件）
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
