var gulp=require('gulp'),
    webserver=require('gulp-webserver');

gulp.task('server',function(){
    gulp.src('./src')
        .pipe(webserver({
            port:8088,
            livereload:true,
            open:true // 服务器启动时自动打开网页
        }));
    gulp.start('watch');
});