var gulp=require('gulp'),
    jshint=require('gulp-jshint');

gulp.task('jshint', function() {
    gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});