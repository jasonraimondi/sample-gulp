'use strict';

var argv = require('yargs').argv;
var babel = require('gulp-babel');
var browser = require('browser-sync');
var concat = require('gulp-concat');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var VENDOR = [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/metismenu/dist/metisMenu.js',
  'node_modules/alertifyjs/build/alertify.js',
  'node_modules/selectize/dist/js/standalone/selectize.js'
  // 'vendor/bower_components/sumoselect/jquery.sumoselect.js'
];

var FOUNDATION = [
  'node_modules/foundation-sites/js/foundation.core.js',
  // 'node_modules/foundation-sites/js/foundation.abide.js',
  'node_modules/foundation-sites/js/foundation.accordion.js',
  // 'node_modules/foundation-sites/js/foundation.accordionMenu.js',
  // 'node_modules/foundation-sites/js/foundation.drilldown.js',
  // 'node_modules/foundation-sites/js/foundation.dropdown.js',
  // 'node_modules/foundation-sites/js/foundation.dropdownMenu.js',
  // 'node_modules/foundation-sites/js/foundation.equalizer.js',
  // 'node_modules/foundation-sites/js/foundation.interchange.js',
  // 'node_modules/foundation-sites/js/foundation.magellan.js',
  // 'node_modules/foundation-sites/js/foundation.offcanvas.js',
  // 'node_modules/foundation-sites/js/foundation.orbit.js',
  // 'node_modules/foundation-sites/js/foundation.responsiveMenu.js',
  'node_modules/foundation-sites/js/foundation.responsiveToggle.js',
  // 'node_modules/foundation-sites/js/foundation.reveal.js',
  'node_modules/foundation-sites/js/foundation.slider.js',
  // 'node_modules/foundation-sites/js/foundation.sticky.js',
  // 'node_modules/foundation-sites/js/foundation.tabs.js',
  // 'node_modules/foundation-sites/js/foundation.toggler.js',
  // 'node_modules/foundation-sites/js/foundation.tooltip.js',
  // 'node_modules/foundation-sites/js/foundation.util.box.js',
  'node_modules/foundation-sites/js/foundation.util.keyboard.js',
  'node_modules/foundation-sites/js/foundation.util.mediaQuery.js',
  'node_modules/foundation-sites/js/foundation.util.motion.js',
  // 'node_modules/foundation-sites/js/foundation.util.nest.js',
  // 'node_modules/foundation-sites/js/foundation.util.timerAndImageLoader.js',
  'node_modules/foundation-sites/js/foundation.util.touch.js',
  'node_modules/foundation-sites/js/foundation.util.triggers.js',
];

var APP = [
  './resources/assets/js/app/app.js',
  './resources/assets/js/app/toggle-sidebar.js',
  './resources/assets/js/app/upload-avatar.js',
];

// Compiles JavaScript into a single file
gulp.task('javascript', ['javascript:vendor', 'javascript:foundation', 'javascript:app']);

// Watch task
gulp.task('watch:js', ['javascript:app'], browser.reload)


gulp.task('javascript:vendor', function () {
  return gulp.src(VENDOR)
      .pipe(concat('vendor.js'))
      .pipe(gulpif(argv.production, uglify()))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('javascript:foundation', function () {
  return gulp.src(FOUNDATION)
      .pipe(babel())
      .pipe(concat('foundation.js'))
      .pipe(gulpif(argv.production, uglify()))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('javascript:app', function () {
  return gulp.src(APP)
      .pipe(babel())
      .pipe(concat('app.js'))
      .pipe(gulpif(argv.production, uglify()))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./public/assets/js'));
});
