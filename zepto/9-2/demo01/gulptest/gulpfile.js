var gulp = require("gulp");
var cleanCss = require("gulp-clean-css");
var js = require("gulp-uglify");
var less = require("gulp-less");
gulp.task("clean",function(){
	// gulp.src()方法参数为源数据，gulp.dest()参数为压缩后的文件目录，
	return gulp.src("src/style/*.css")
		   .pipe(cleanCss())//压缩文件
		   .pipe(gulp.dest("dest/style"));
})
gulp.task("uglify",function(){
	// gulp.src()方法参数为源数据，gulp.dest()参数为压缩后的文件目录，
	return gulp.src("src/script/*.js")
		   .pipe(js())//压缩文件
		   .pipe(gulp.dest("dest/script"));
})
gulp.task("less",function(){
	return gulp.src("src/less/*.less")
		   .pipe(less())//压缩文件
		   .pipe(gulp.dest("src/style"));
})
gulp.task("watch",function(){//监听
	gulp.watch("src/less/*.less",["less"]);
	gulp.watch("src/style/*.css",["clean"]);
	gulp.watch("src/script/*.js",["uglify"]);
})
gulp.task("default",["less","clean","uglify","watch"]);
