var gulp = require('gulp');
var render = require('gulp-nunjucks-render');

gulp.task('nunjucks', function() {
  return gulp.src('src/pages/**/*.+(njk)')
  .pipe(render({
      path: ['src/templates']
    }))
  .pipe(gulp.dest('./case-studies'))
});