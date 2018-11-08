'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')

// import gulp from 'gulp'
// import sass from 'gulp-sass'
// import autoprefixer from 'gulp-autoprefixer'
// import rename from 'gulp-rename'

gulp.task('sass', () => {
  return gulp.src('style.scss')
    .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['> 5%'], cascade: false }))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./'))
})

gulp.task('sass:watch', () => {
  gulp.watch('./**/*.scss', ['sass'])
})
