var gulp=require('gulp'),
    livereload=require('gulp-livereload'),
    config=require('../config');

gulp.task('watch',function(){
    //gulp.watch(config.html.all,['html']);
    gulp.watch(config.less.all,['less'])
        .on('change',function(event){
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            //gulp.start('less');
        });
    gulp.watch(config.js.all,['script']);
    gulp.watch(config.images.all,['images']);
    livereload.listen();
    gulp.watch(['./dest/**'])
        .on('change',livereload.changed);
});