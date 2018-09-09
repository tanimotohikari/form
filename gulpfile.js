'use strict';

var gulp = require('gulp');
var style = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var script = require('gulp-concat');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');

gulp.task('style', function() {
  gulp.src(['./src/scss/style.scss'])
    .pipe(plumber())
    .pipe(style())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dst/css/'));
});

gulp.task('script', function(){
  gulp.src(['./src/script/index.js'])
  /*.pipe(plumber())
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())*/
  .pipe(gulp.dest('./dst/script/'));
});

gulp.task('img', function(){
  gulp.src(['./src/img/*.jpg', './src/img/*.png', './src/img/*.gif'])
  .pipe(gulp.dest('./dst/img/'));
});

gulp.task('watch', function(){
  gulp.watch(['./src/scss/*/*.scss', './src/script/*.js', './src/img/*.png', './src/img/*.svg'], ['style', 'script', 'img']);
});
