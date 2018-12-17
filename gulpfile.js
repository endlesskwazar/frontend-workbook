const gulp = require('gulp');
var markdown = require('gulp-markdown-github-style');

gulp.task('resources', () => {
    return gulp.src('resources/**/*')
        .pipe(gulp.dest('dist/resources'));
});

gulp.task('md', () => {
    return gulp.src('md-text/*.md')
        .pipe(markdown())
        .pipe(gulp.dest('dist/workbook'));
});

gulp.task('default', gulp.series('resources', 'md'));