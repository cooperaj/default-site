const { src, dest } = require('gulp');

exports.processAssets = function processAssets() {
    return src([ 'assets/images/logo.svg' ])
        .pipe(dest('public/'));
}