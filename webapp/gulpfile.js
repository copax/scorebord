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
    .pipe(gulp.dest('./styles'));
});

gulp.task('watch', function() {
  gulp.watch('/styles/*.scss', ['sass']);
  gulp.watch('src/*.js');
});

gulp.task('default', ['sass', 'webserver', 'livereload', 'watch']);
