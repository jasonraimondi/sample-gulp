'use strict';

var gulp = require('gulp');
var browser = require('browser-sync');

// Starts a BrowerSync instance
gulp.task('serve', ['default'], function () {

  browser.init({
    proxy: "recoverypassport.app",
    notify: false
  });

  gulp.watch('./resources/assets/images/**/*', ['watch:images']);
  gulp.watch('./resources/assets/sass/**/*', ['watch:sass']);
  gulp.watch('./resources/assets/js/**/*', ['watch:js']);
  gulp.watch(['./resources/views/**/*'], browser.reload);

});
