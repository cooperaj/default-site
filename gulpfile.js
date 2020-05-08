'use strict';

const { series, parallel } = require('gulp');
const { processAssets } = require('./gulp/tasks/assets');
const { compileSass} = require('./gulp/tasks/css');
const favicon = require('./gulp/tasks/favicon');

exports.sass = compileSass;
exports.default = parallel(
    processAssets, 
    compileSass, 
    series(
        favicon.generateFavicon, 
        favicon.injectFaviconMarkups
    )
);