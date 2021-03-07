const { src, dest, series } = require('gulp')
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
// const plumber = require('gulp-plumber');
// const coffee = require('gulp-coffee');
const gls = require('gulp-live-server');

function copyHTML() {
  return src('src/index.html')
    .pipe(dest('dist'))
}

function buildJs() {
  return src(['src/jquery-ui.js', 'src/task1.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('srt.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('../maps'))
    // .pipe(plumber())
    // .pipe(coffee())
    .pipe(dest('dist'))
}

module.exports = {
  default: series(copyHTML, buildJs),
}