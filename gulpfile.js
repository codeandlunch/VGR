var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    sass = require('gulp-sass'),
    run = require('gulp-run');

gulp.task('scripts', function (){

    gulp.src(['app/main.js'])
        .pipe(browserify({
            debug: true,
            transform : ['reactify']
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('styles', function (){
    gulp.src(['app/sass/*.sass'])
        .pipe(sass())
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', function (){
    gulp.watch(['app/**/*.js', 'app/sass/*.sass'], ['scripts', 'styles'])
});

gulp.task('dev', ['scripts', 'styles', 'watch']);

gulp.task('default', ['scripts', 'styles']);
