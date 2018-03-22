/* eslint-disable no-magic-numbers */
import gulp from "gulp";
import util from "gulp-util";
import del from "del";
import sass from "gulp-sass";
import concat from "gulp-concat";
import cssnano from "gulp-cssnano";
import minifier from "gulp-uglify/minifier";
import uglifyjs from "uglify-js";
import mainBower from "main-bower-files";
import webpack from "webpack";
import {HotModuleReplacementPlugin} from "webpack";
import webpackStream from "webpack-stream";
import WebpackDevServer from "webpack-dev-server";
import runSequence from "run-sequence";
import webpackConfig from "./webpack.config.babel";

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
  return gulp.src(["./assets/styles/importer.scss"])
    .pipe(sass().on("error", util.log))
    .pipe(concat("style.css").on("error", util.log))
    .pipe(cssnano().on("error", util.log))
    .pipe(gulp.dest("./public/"));
});

/**
 * Watch for scss file changes and run sass task
 */
gulp.task("sass:watch", function() {
  return gulp.watch("./assets/styles/**/*.scss", ["sass"]);
});

/**
 * Copy images to build folder
 */
gulp.task("copy:images", function() {
  return gulp.src(["./assets/images/**/*"], {
      base: "assets"
    })
    .pipe(gulp.dest("./public/"));
});

/**
 * Copy fonts to build folder
 */
gulp.task("copy:fonts", function() {
  return gulp.src(["./assets/fonts/**/*"], {
      base: "assets"
    })
    .pipe(gulp.dest("./public/"));
});

/**
 * Bundle the js files of bower components
 */
gulp.task("bower:js", () => {
  return gulp.src(mainBower("**/*.js"))
    .pipe(concat("bower.js").on("error", util.log))
    .pipe(minifier({}, uglifyjs).on("error", util.log))
    .pipe(gulp.dest("./public/"));
});

/**
 * Bundle the css files of bower components
 */
gulp.task("bower:css", () => {
  return gulp.src(mainBower("**/*.css"))
    .pipe(concat("bower.css").on("error", util.log))
    .pipe(cssnano().on("error", util.log))
    .pipe(gulp.dest("./public/"));
});

/**
 * Build JSX Components for Production
 */
gulp.task("webpack-build", () => {
  return gulp.src("./src/index.jsx")
    .pipe(webpackStream(webpackConfig, webpack))
    .on("error", (error) => { util.log(error); })
    .pipe(gulp.dest("public/"));
});

/**
 * Start Dev server with Webpack
 */
gulp.task("webpack-dev-server", () => {
  let devConfig = Object.create(webpackConfig);
  devConfig.entry.unshift("react-hot-loader/patch");
  devConfig.entry.unshift("webpack-dev-server/client?http://localhost:8080");
  devConfig.plugins.unshift(new HotModuleReplacementPlugin());

  new WebpackDevServer(webpack(devConfig), {
    contentBase: "public/",
    stats: {colors: true},
    historyApiFallback: true,
    hot: true,
    hotOnly: true
  })
    .listen(8080, "localhost", (error) => {
      if(error) {
        util.log("Error in webpack-dev-server", error);
      }
      util.log("Application started at localhost:8080...");
    });
});

/**
 * Run in development environment
 */
gulp.task("dev", (callback) => {
  runSequence([
    "clean",
    "sass",
    "sass:watch",
    "copy:images",
    "copy:fonts",
    "bower:js",
    "bower:css",
    "webpack-dev-server"
  ], callback);
});

/**
 * Run in production environment
 */
gulp.task("build", (callback) => {
  runSequence([
    "clean",
    "sass",
    "copy:images",
    "copy:fonts",
    "bower:js",
    "bower:css",
    "webpack-build"
  ], callback);
});
