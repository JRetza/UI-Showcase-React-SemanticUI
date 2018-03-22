import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = {
  entry: [
    path.join(__dirname, "src/index.js")
  ],
  output: {
    path: path.join(__dirname, "public/"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src/index.html")
    })
  ],
  devtool: "source-map",
  resolve: {
    extensions: [".json", ".js", ".react.js"]
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "src"),
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              plugins: [
                "react-hot-loader/babel",
                "transform-class-properties",
                "transform-decorators-legacy",
                "transform-object-rest-spread"
              ],
              presets: [
                ["es2015", {modules: false}],
                "react"
              ]
            }
          }
        ]
      }
    ]
  }
};

export default config;
