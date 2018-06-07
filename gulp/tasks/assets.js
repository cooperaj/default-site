var gulp = require('gulp');

gulp.task('process-assets', function() {
    return gulp.src([ 'assets/images/logo.svg' ])
        .pipe(gulp.dest('public/'));
});

