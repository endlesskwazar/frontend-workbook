const gulp = require('gulp');
var gulpMdToHtml = require("gulp-md-to-html")

gulp.task('resources', () => {
    return gulp.src('resources/**/*')
        .pipe(gulp.dest('dist/resources'));
});

gulp.task('md', () => {
    return gulp.src('md-text/*.md')
        .pipe(gulpMdToHtml())
        .pipe(gulp.dest('dist/workbook'));
});

gulp.task('default', gulp.series('resources', 'md'));