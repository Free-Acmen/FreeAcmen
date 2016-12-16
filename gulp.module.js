gulp = require("gulp")
coffee = require("gulp-coffee") # 编译coffee
uglify = require("gulp-uglify") # 压缩js
less = require("gulp-less") # 编译 less
gulpFilter = require 'gulp-filter' # 过滤文件
override = require 'gulp-rev-css-url' # 修正 css 文件里面的图片路径
clean = require "gulp-clean" # 清除目录或文件
rev = require "gulp-rev" # 生成版本 hash 的静态文件
gutil = require "gulp-util" # 一个工具库
plumber = require "gulp-plumber" # 自动处理全部错误信息防止因为错误而导致 watch 不正常工作
changed = require "gulp-changed" # 只编译修改过的文件，加快速度


# 压缩css
LessPluginCleanCSS = require("less-plugin-clean-css")
cleancss = new LessPluginCleanCSS(advanced: true)
# 自动加上 css3 前缀
LessPluginAutoPrefix = require("less-plugin-autoprefix")

# 自动加上css前缀
autoprefix = new LessPluginAutoPrefix(browsers: [
  "ie >= 8"
  "ie_mob >= 10"
  "ff >= 26"
  "chrome >= 30"
  "safari >= 6"
  "opera >= 23"
  "ios >= 5"
  "android >= 2.3"
  "bb >= 10"
])

# 各种资源的原始路径
public_src = "gulp_src/Public/**/*"
public_dest = "Public"

# 错误处理
handleError = (err) ->
  gutil.beep()
  gutil.log err.toString()

# 清除 rev 目标
gulp.task "clean", ->
  clean_src = [
    public_dest + "/js/**/*.js"
    public_dest + "/css/**/*.css"
    public_dest + "/img"
    public_dest + "/fonts/**/*"
    public_dest + "/rev-manifest.json"
  ]
  gulp.src clean_src
    .pipe clean()

# coffee 资源路径
coffee_src = "gulp_src/Public/js/**/*.coffee"
coffee_dest = "gulp_src/Public/js"

# 生成 js 并压缩
gulp.task "coffee", ->
  gulp.src coffee_src
    .pipe plumber(errorHandler: handleError)
    # 只编译修改过的 coffee
    .pipe changed(coffee_dest,
      extension: '.js'
    )
    .pipe coffee() # 编译 coffee
    .pipe uglify() # 压缩
    .pipe gulp.dest(coffee_dest)

less_src = "gulp_src/Public/css/**/*.less"
less_dest = "gulp_src/Public/css"
gulp.task "less", ->
  gulp.src less_src
    .pipe plumber(errorHandler: handleError)
    # 只编译修改过的 less
    .pipe changed(less_dest,
      extension: '.css'
    )
    .pipe less(
      plugins: [autoprefix,cleancss]
    )
    .pipe gulp.dest(less_dest)

# 生成带 hash 版本的资源文件
gulp.task "rev", ['coffee','less'], ->
  # 过滤器
  publicFilter = gulpFilter [
    'js/**/*.js'
    'css/**/*.css'
    'img/**/*'
    'fonts/**/*'
  ]
  gulp.src [public_src]
    .pipe plumber(errorHandler: handleError)
    .pipe publicFilter
    .pipe rev()
    .pipe override() # 重写 css 文件里面对应的文件的版本
    .pipe gulp.dest(public_dest)
    .pipe rev.manifest() # 生成 manifest 文件
    .pipe gulp.dest(public_dest)
    .pipe publicFilter.restore()

gulp.task "default", ->
  gulp.watch [coffee_src,less_src], ["rev"]