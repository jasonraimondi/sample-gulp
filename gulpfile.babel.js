'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./gulp');

// Builds the project
gulp.task('default', ['sass', 'javascript', 'images:cache']);

gulp.task('build', ['sass', 'javascript', 'images:build']);

// Runs all of the above tasks and then waits for files to change
gulp.task('watch', ['sass', 'javascript'], function() {
  gulp.watch('./resources/assets/sass/**/*.scss', ['sass']);
  gulp.watch('./resources/assets/js/**/*.js', ['javascript']);
});
