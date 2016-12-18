var gulp=require('gulp');

gulp.task('default',['clean'],function(){
    gulp.start('jshint','less','script','images','watch');
});