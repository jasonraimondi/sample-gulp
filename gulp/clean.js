'use strict';

var del = require('del');
var gulp = require('gulp');

var DELETE = [
  './public/assets'
];

gulp.task('clean', function (cb) {
  del(DELETE, cb);
});

gulp.task('clean:sass', function (cb) {
  del(['./public/assets/css'], cb);
});

gulp.task('clean:javascript', function (cb) {
  del(['./public/assets/js'], cb);
});
