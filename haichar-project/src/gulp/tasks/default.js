var gulp=require('gulp');

gulp.task('default',['jshint','clean'],function(){
    gulp.start('less','script','images','server');
});