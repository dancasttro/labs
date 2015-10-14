'use strict';

var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	precss = require('precss'),
	lost = require('lost'),
	autoprefixer = require('autoprefixer-core');

gulp.task('styles', function() {
	var processors = [
		lost,
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
