'use strict';

var argv = require('yargs').argv;
var babelify = require('babelify');
var browser = require('browser-sync');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var rename = require("gulp-rename");
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var vueify = require('vueify');

gulp.task('watch:browserify', ['browserify'], browser.reload);

gulp.task('browserify', function () {

  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './resources/assets/js/main.js',
    debug: true
  });

  return b
      .transform(babelify)
      .transform(vueify)
      .bundle()
      .pipe(source('main.js'))
      .pipe(rename('package.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({
        loadMaps: true
      }))
      // Add transformation tasks to the pipeline here.
      .pipe(gulpif(argv.production, uglify()))
      .on('error', gutil.log)
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./public/assets/js'));
});