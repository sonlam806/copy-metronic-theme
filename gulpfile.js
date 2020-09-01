var gulp = require('gulp');
var rename = require('gulp-rename');

const css = function () {
  const postcss = require('gulp-postcss');

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

gulp.task('watch', function () {
  return gulp.watch('src/tailwind/*.css', css);
});
