var gulp=require('gulp'),
    jshint=require('gulp-jshint'),
    plumber=require('gulp-plumber'),
    sourcemaps=require('gulp-sourcemaps'),
    concat=require('gulp-concat'),
    rename=require('gulp-rename'),
    uglify=require('gulp-uglify'),
    livereload=require('gulp-livereload'),
    notify=require('gulp-notify'),
    config=require('../config').js;


gulp.task('script', function() {
    gulp.src(config.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(config.dest))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify({preserverComments:'some'}))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.dest))
        .pipe(livereload())
        .pipe(notify({ message: 'js task complete' }));;
});