'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['inject'], function () {

  gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject']);

  gulp.watch(path.join(conf.paths.src, '/app/**/*.css'), function(event) {
      browserSync.reload(event.path);
      gulp.start('inject');
  });

  gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), function(event) {
      gulp.start('scripts');
      gulp.start('inject');
  });

  gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), function(event) {
    gulp.start('html2');
    browserSync.reload(event.path);
  });
});
