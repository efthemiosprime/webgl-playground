const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExractPlugin = require("mini-css-extract-plugin")

module.exports = {
   module: {

      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader"
            }
         },
         {
            test: /\.html$/,
            use: {
               loader: "html-loader",
               options: { minimize: true }
            }
         },
         {
            test: /\.scss$/,
            use: [
               'style-loader',
               'css-loader',
               'sass-loader'
            ]
         },
         {
            test: /\.(png|svg|jpe?g||gif)$/i,
            use : [
               {
                  loader: 'file-loader',
                  options: {
                     esModule: false
                  }
               }
            ]
         }, 
         {
            test: /\.glsl$/,
            exclude: /node_modules/,
            use:  [
               'raw-loader'             ]
         }
      ],
   },
   plugins: [
      new HtmlWebpackPlugin( {
         template: './src/index.html',
         filename: './index.html'
      }),
      new MiniCssExractPlugin( {
         filename: "[name].css",
         chunkFilename: "[id].css"
      })
   ]
}