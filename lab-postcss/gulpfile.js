'use strict';

var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	csswring = require('csswring'),
	stylus = require('gulp-stylus'),
	cssnext = require('cssnext'),
	precss = require('precss'),
	autoprefixer = require('autoprefixer-core');

gulp.task('styles', function() {
	var processors = [
		precss({}),
		autoprefixer({browsers: ['last 2 version']})
	];
    return gulp.src('css/styles.css')
    	.pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', function() {
    gulp.watch('**/*.css', ['styles']);
});
