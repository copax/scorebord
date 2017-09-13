var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var notifier = require('node-notifier');
var server = require('gulp-server-livereload');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var notify = function(error) {
  var message = 'In: ';
  var title = 'Error: ';

  if(error.description) {
    title += error.description;
  } else if (error.message) {
    title += error.message;
  }

  if(error.filename) {
    var file = error.filename.split('/');
    message += file[file.length-1];
  }

  if(error.lineNumber) {
    message += '\nOn Line: ' + error.lineNumber;
  }

  gutil.log(title + ': ' + message);
  notifier.notify({title: title, message: message});
};

gulp.task('build', function() {
});

gulp.task('serve', function(done) {
  gulp.src('')
    .pipe(server({
      port: 1337,
      livereload: {
        enable: true,
        filter: function(filePath, cb) {
          //console.log(filePath, cb);
          cb(true)
          /*
          if(/main.js/.test(filePath)) {
            cb(true)
          } else if(/style.css/.test(filePath)){
            cb(true)
          }
          */
        }
      },
      open: true
    }));
});

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('src', function() {
  gulp.src('./src/**/*.js')
});

gulp.task('default', ['build', 'serve', 'sass', 'src', 'watch']);

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./src/**/*.js', ['src']);
});
