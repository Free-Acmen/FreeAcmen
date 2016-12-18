g

ulp.task('script', ['jshint','clean'], function() {
    var jsSrc = ['./src/js/**/*.js'];
    return gulp.src(jsSrc)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dest/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify({preserverComments:'some'}))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('./dest/js'))
        .pipe(livereload())
        .pipe(notify({ message: 'js task complete' }));;
});