import webpack from 'webpack';
const prod = process.argv.indexOf('-p') !== -1;

const BUILD_PATH_PREFIX = (prod) ? '' : '/mb-snippet-manager';


export default {
  // devtool: 'inline-source-map',
  devtool: 'source-map',
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}${BUILD_PATH_PREFIX}/build`,
    publicPath: `${BUILD_PATH_PREFIX}/build/`,
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.(scss|css)$/,
        loader: 'style-loader!css-loader!sass-loader?sourceMap'
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      // {
      //   test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
      //   loader: 'file-loader'
      // },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: process.argv.indexOf('-p') === -1 ? [
      // new webpack.DefinePlugin({
      //   'process.env.NODE_ENV': JSON.stringify('production'),
      // }),
    ] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  ],
};
