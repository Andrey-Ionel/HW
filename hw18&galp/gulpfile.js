const { src, dest, series, watch } = require('gulp')
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
// const plumber = require('gulp-plumber');
// const coffee = require('gulp-coffee');
// const gls = require('gulp-live-server');
const browserSync = require('browser-sync').create();


function copyHTML() {
  return src('src/index.html')
    .pipe(dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
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
    .pipe(browserSync.reload({
      stream: true
    }))
  // .pipe(browserSync.stream())
}

function bSync() {
  browserSync.init({
    server: './dist',
    index: '/index.html',
    notify: false,
    online: true
  })
}

function watchFiles(done) {
  watch('src/css/**/*.css', browserSync.reload);
  watch('./*.html').on('change', browserSync.reload);
  watch('./js/**/*.js').on('change', browserSync.reload);
  done();
}

// function reload(done) {
//   browserSync.reload();
//   done();
// }

module.exports = {
  default: series(copyHTML, buildJs, bSync, watchFiles)
}