var gulp=require('gulp'),
    del=require('del'),
    config=require(../config).clean;


gulp.task('clean',function(cb){
    console.log(cb);
    return del([config],cb);
});
