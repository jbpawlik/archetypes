// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import path from 'path';
// import {fileURLToPath} from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export const webpackConfig = {
//   entry: {
//     index: './src/index.js',
//   },
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'index_bundle.js',
//     globalObject: 'this'
//   },
//   target: ["web", "es5"],
//   plugins: [new HtmlWebpackPlugin({
//     template: './src/index.html',
//     // placeholderVariable: '<% placeholder %>',
//     filename: 'index.html',
//     templateParameters: {
//       placeholderVariable: '<% placeholder %>',
//       _hidden: '<% hidden %>',
//     },
//     inject: 'body'
//   }) 
//   ]
// ,
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ['css-loader'],
//         exclude: /node_modules/
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: 'asset/resource',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.(woff|woff2|eot|ttf|otf)$/i,
//         type: 'asset/resource',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.(csv|tsv)$/i,
//         use: ['csv-loader'],
//         exclude: /node_modules/
//       },
//       {
//         test: /\.xml$/i,
//         use: ['xml-loader'],
//         exclude: /node_modules/
//       },
//     ],
//   },
// };