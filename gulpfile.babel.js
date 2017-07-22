import gulp from "gulp";
import util from "gulp-util";
import sass from "gulp-sass";
import concat from "gulp-concat";
import cssnano from "gulp-cssnano";
import del from "del";
import webpack from "webpack";
import webpackStream from "webpack-stream";
import webpackDevServer from "webpack-dev-server";
import UglifyJSWebpackPlugin from "uglifyjs-webpack-plugin";
import runSequence from "run-sequence";
import webpackConfig from "./webpack.config.babel";

const isProduction = false;

/**
 * Clean build files
 */
gulp.task("clean", (callback) => {
  del.sync("./public/", callback);
});

/**
 * Convert scss to css
 */
gulp.task("sass", function() {
  return gulp.src([
      "./assets/styles/importer.scss"
    ])
    .pipe(sass().on("error", util.log))
    .pipe(concat("style.css").on("error", util.log))
    .pipe(cssnano().on("error", util.log))
    .pipe(gulp.dest("./public/css/"));
});

/**
 * Build JSX Components for Production
 */
gulp.task("webpack-build", () => {
  return gulp.src("./src/index.jsx")
    .pipe(webpackStream(webpackConfig, webpack))
    .on( "error", (error) => { util.log(error); })
    .pipe(gulp.dest("public/"));
});

/**
 * Start Dev server with Webpack
 */
gulp.task("webpack-dev-server", () => {
  new webpackDevServer(webpack(webpackConfig), {
    contentBase: "public/",
    stats: { colors: true },
    hot: true,
    watchOptions: {
      poll: true
    }
  })
  .listen(8080, "localhost", (error) => {
    if(error) {
      util.log("Error in webpack-dev-server", error);
    }
    console.log("\nApplication started at localhost:8080...");
  });
});

/**
 * Run in development environment
 */
gulp.task("dev", (callback) => {
  runSequence([
    "clean",
    "sass",
    "webpack-dev-server"
  ], callback)
});

/**
 * Run in production environment
 */
gulp.task("build", (callback) => {
  runSequence([
    "clean",
    "webpack-build"
  ], callback)
});
