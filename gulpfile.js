const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');


// Define paths
const paths = {
  styles: {
    src: 'src/less/style.less',
    dest: 'dist/css/'
  },
  script: {
    src: 'src/js/*.js',
    dest: 'dist/js/'
  }
};

// Compile Less to CSS
function compileStyles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
}

// Minifiy and uglify JS
function minifyJS() {
    return gulp.src(paths.script.src)
      .pipe(uglify({mangle: true}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(paths.script.dest));
  }
  

// Watch for changes to Less files
function watch() {
  gulp.watch('src/less/**/*.less', compileStyles);
  gulp.watch('src/js/**/*.js', minifyJS);
}


// Export tasks
exports.watch = watch;
exports.minifyJS = minifyJS;
exports.default = gulp.series(compileStyles, minifyJS, watch);

