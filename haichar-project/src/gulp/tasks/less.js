var gulp=require('gulp'),
    plumber=require('gulp-plumber'),
    less=require('gulp-less'),
    livereload=require('gulp-livereload'),
    notify=require('gulp-notify'),
    cleancss=require('gulp-clean-css'),
    rename=require('gulp-rename'),
    concat=require('gulp-concat'),
    config=require('../config').less;

gulp.task('less',function(){
    gulp.src(config.src)
        .pipe(plumber())
        .pipe(less(config.settings))
        .pipe(gulp.dest('./src/css'))
        .pipe(concat('all.css'))
        .pipe(gulp.dest(config.dest))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleancss())
        .pipe(gulp.dest(config.dest))
        .pipe(livereload())
        .pipe(notify({ message: 'css task complete' }));
});