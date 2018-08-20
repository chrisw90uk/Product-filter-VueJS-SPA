var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function(){
	browserSync.init({
		server: { baseDir: './'}
	});
})

gulp.task('sass', function () {
  return gulp.src('css/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', ['browserSync', 'sass'] ,function () {
  gulp.watch('css/scss/**/*.scss', ['sass']);
});