var gulp=require('gulp'),
    changed=require('gulp-changed'),
    cache=require('gulp-cache'),
    imagemin=require('gulp-imagemin'),
    pngquant=require('imagemin-pngquant'),
    liverrload=require('gulp-livereload'),
    config=require('../config').images;

gulp.task('images',function(){
    return gulp.src(config.src)
        .pipe(changed(config.dest))
        .pipe(cache(imagemin({
            optimizationlevel:5,
            progressive:true,
            interlaced:true,
            use:[pngquant()]
        })))
        .pipe(gulp.dest(config.dest))
        .pipe(livereload())
        .pipe(notify({message:'image task comlpete'}))
});