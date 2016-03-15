'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var scssLint = require('gulp-scss-lint');

// Lints Sass and JavaScript files for formatting issues
gulp.task('lint', ['lint:sass', 'lint:javascript']);

gulp.task('lint:sass', function () {
  return gulp.src('./resources/assets/sass/style.scss')
      .pipe(scssLint({
        'config': './.lint-scss.yml'
      }));
});

gulp.task('lint:javascript', function () {
  jshint.lookup = false;

  return gulp.src('./resources/assets/js/*.js')
      .pipe(jshint('./.lint-js'))
      .pipe(jshint.reporter('default'));
});

gulp.task('lint:gulp', function () {
  jshint.lookup = false;

  return gulp.src([
        './gulp/**/*.js',
        'gulpfile.js'
      ])
      .pipe(jshint('./.lint-js'))
      .pipe(jshint.reporter('default'));
});
