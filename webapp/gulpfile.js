var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass');

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    port: 1337
  });
});

gulp.task('livereload', function() {
  gulp.src(['styles/*.css', 'scripts/*.js', '**/*.html'])
    .pipe(watch())
    .pipe(connect.reload());
});

gulp.task('sass', function() {
  gulp.src('styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('styles/*.scss', ['sass'])
    .pipe(watch().on('error', watch.logError));
});

gulp.task('default', ['sass', 'webserver', 'livereload', 'watch']);
