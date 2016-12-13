var gulp = require('gulp'),
	minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    del = require('del');

//检查js
gulp.task('jshint', function() {
    gulp.src('./js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

//css压缩
gulp.task("minify_css",["clean"],function(){
	var cssSrc=['./css/*.css'];
	return gulp.src(cssSrc)
			.pipe(concat('main.css'))
			.pipe(gulp.dest('./dest/css'))
			.pipe(rename({suffix:'.min'}))
			.pipe(minifycss())
			.pipe(gulp.dest('./dest/css'));
});

//压缩js
gulp.task("minify_js",["clean"],function(){
	var jsSrc=['./js/*.js'];
	return gulp.src(jsSrc)
			.pipe(concat('main.js'))
			.pipe(gulp.dest('./dest/js'))
			.pipe(rename({suffix:'.min'}))
			.pipe(uglify())
			.pipe(gulp.dest('.dest/js'));
});

//清除之前压缩的文件
gulp.task('clean',function(){
	return del(['./dest/css/main.css','./dest/css/main.min.css','./dest/js/main.js','./dest/js/mian.min.js']);
});

//默认任务
gulp.task('default',function(){
	gulp.run('minify_css','minify_js','jshint');
});