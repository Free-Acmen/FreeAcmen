var gulp=require('gulp'),
    less=require('gulp-less'),
    config=require('../config').less;

gulp.task('less',function(){
    return gulp.src(config.src)
        .pipe(plumber())
        .pipe(less(config.settings))
        .pipe(concat('all.css'))
        .pipe(gulp.dest(config.dest))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleancss())
        .pipe(gulp.dest(config.dest));
        .pipe(livereload())
        .pipe(notify({ message: 'css task complete' }));
});