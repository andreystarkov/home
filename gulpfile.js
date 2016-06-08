/*
* @Author: Andrey Starkov
* @Date:   2016-05-25 23:35:22
* @Last Modified by:   Andrey Starkov
* @Last Modified time: 2016-05-26 00:02:26
*/

const config = {
  less: {
    src: 'components/styles/everything.less',
    watch: 'components/styles/**/*.less',
    dist: 'static/app'
  }
}

var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');

var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

/*var LessCSSWring = require('less-plugin-csswring'),
    CSSWring = new LessPluginCSSwring({sourcemap: true});*/

var LessGlob = require('less-plugin-glob');

var LessCSSComb = require('less-plugin-csscomb'),
    CSSComb = new LessCSSComb("zen");

var LessCleanCSS = require('less-plugin-clean-css'),
    CSSClean = new LessCleanCSS({advanced: true});

gulp.task('less', function() {
  return gulp.src(config.less.src)
    .pipe(less({
      plugins: [autoprefix, CSSComb, /*CSSWring, */ CSSClean, LessGlob]
    }))
    .pipe(gulp.dest(config.less.dist))
    .pipe(notify('Styles compiled'));
});

gulp.task('watch', function() {
    gulp.watch(config.less.watch, { interval: 800 }, ['less']);
});

gulp.task('default', ['less', 'watch']);
