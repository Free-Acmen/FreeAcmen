
var requireDir=require('reuqire-dir');

requireDir('./gulp/tasks',{recurse:true});


// var gulp = require('gulp'),
//     //minifycss = require('gulp-minify-css'),  该插件已废弃，使用gulp-clean-css
//     cleancss=require('gulp-clean-css'),
//     concat = require('gulp-concat'),
//     uglify = require('gulp-uglify'),
//     rename = require('gulp-rename'),
//     less = require('gulp-less'),
//     jshint = require('gulp-jshint'),
//     plumber=require('gulp-plumber'),
//     compass=require('gulp-compass'),
//     autoprefixer=require('gulp-autoprefixer'),
//     htmlmin=require('gulp-htmlmin'),
//     imagemin=require('gulp-imagemin'),
//     pngquant=require('imagemin-pngquant'),
//     notify=require('gulp-notify'),
//     cache=require('gulp-cache'),
//     livereload=require('gulp-livereload'),
//     webserver=require('gulp-webserver'),
//     rev=require('gulp-rev'),
//     del = require('del');

// //检查js
// gulp.task('jshint', function() {
//     gulp.src('./src/js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// //css压缩
// gulp.task("css", ['clean'], function() {
//     var cssSrc = ['./src/css/**/*.css'];
//     return gulp.src(cssSrc)
//         .pipe(plumber())
//         .pipe(concat('main.css'))
//         .pipe(gulp.dest('./dest/css'))
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(cleancss())
//         .pipe(gulp.dest('./dest/css'))
//         .pipe(livereload())
//         .pipe(notify({ message: 'css task complete' }));
// });

// //压缩js
// gulp.task("js", ['jshint','clean'], function() {
//     var jsSrc = ['./src/js/**/*.js'];
//     return gulp.src(jsSrc)
//         .pipe(plumber())
//         .pipe(concat('main.js'))
//         .pipe(gulp.dest('./dest/js'))
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(uglify())
//         .pipe(gulp.dest('./dest/js'))
//         .pipe(livereload())
//         .pipe(notify({ message: 'js task complete' }));;
// });
// //压缩图片
// gulp.task('images', ['clean'], function(){
//     return gulp.src('./src/images/**/*.{png,jpg,gif,ico,swf}')
//         .pipe(cache(imagemin({
//             optimizationlevel:5,
//             progressive:true,
//             interlaced:true,
//             use:[pngquant()]
//         })))
//         .pipe(gulp.dest('./dest/images'))
//         .pipe(livereload())
//         .pipe(notify({message:'image task comlpete'}))
// });

// //watch
// gulp.task('watch',function(){
//     gulp.watch('src/template/**/*.html',['html']);
//     gulp.watch('src/css/**/*.css',['css']);
//     gulp.watch('src/js/**/*.js',['js']);
//     gulp.watch('src/images/**/*',['images']);
//     livereload.listen();
//     gulp.watch(['./dest/**'])
//         .on('change',livereload.changed);
// });

// gulp.task('server',function(){
//     gulp.src('./dest')
//         .pipe(webserver({
//             livereload:true,
//             oper:true
//         }));
//     gulp.start('watch');
// });
// //清除之前压缩的文件
// gulp.task('clean', function(cb) {
//     return del(['./dest/'],cb);
// });

// //默认任务
// gulp.task('default', ['jshint','clean'], function() {
//     gulp.start("css",'js','images');
// });
