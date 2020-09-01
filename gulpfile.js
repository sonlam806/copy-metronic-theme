const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');

sass.compiler = require('node-sass');

const css = function () {
  return (
    gulp
      .src('src/tailwind/tailwind.css')
      // ...
      .pipe(
        postcss([
          // ...
          require('tailwindcss'),
          require('autoprefixer'),
          // ...
        ])
      )
      // ...
      .pipe(rename('main.css'))
      .pipe(gulp.dest('src/styles'))
  );
};

const scss = function () {
  gulp
    .src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('custom_style.css'))
    .pipe(gulp.dest('src/styles'));
};

gulp.task('watch', function () {
  return gulp.watch('src/tailwind/*.css', css);
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', [scss, css]);
});
