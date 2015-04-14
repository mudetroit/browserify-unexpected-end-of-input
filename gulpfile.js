var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');

gulp.task('default', ['browserify', 'concat']);

gulp.task('browserify',	function(){
	return browserify({
		entries: ['./src/app.js'],
		transform: [["reactify", {"es6": true}]],
		extensions: ['.jsx'],
		debug: true,
		standalone: 'App'
	}).bundle()
	.pipe(source('browserifyPackage.js'))
	.pipe(gulp.dest('./oldSrc'));
})

gulp.task('concat', ['browserify'], function(){
	return gulp.src(['./oldSrc/browserifyPackage.js', './oldSrc/app.js'])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('./'));
})
