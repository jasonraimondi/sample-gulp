'use strict';

var gulp = require('gulp');

var FILES = [
  './resources/assets/fonts',
  './resources/assets/videos',
  './resources/assets/vendor'
];

// Copies static assets
gulp.task('copy', function () {
  gulp.src(FILES)
      .pipe(gulp.dest('./public/assets/'));
});
