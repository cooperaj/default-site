'use strict';

var gulp = require('gulp');
var HubRegistry = require('gulp-hub');

var hub = HubRegistry(['gulp/tasks/*.js']);

gulp.registry(hub);

gulp.task('default', 
    gulp.parallel(
        'process-assets',
        gulp.series('generate-favicon', 'inject-favicon-markups')
    )
);