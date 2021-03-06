const path = require ('path'),
      common = require('./webpack.common'),
      { merge } = require ('webpack-merge'),
      {CleanWebpackPlugin} = require ('clean-webpack-plugin'),
      MiniCssExtractPlugin = require ('mini-css-extract-plugin'),
      CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
      TerserPlugin = require("terser-webpack-plugin"),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge (common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css"}),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            minify: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]  
            }
        ]
    },
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
          new TerserPlugin()
        ],
      },
});