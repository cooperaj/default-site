'use strict';
 
const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const cleancss = require('gulp-clean-css');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const purgecss = require('gulp-purgecss');
 
exports.compileSass = function compileSass() {
    return src('assets/stylesheets/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(purgecss({content: ['views/**/*.pug']}))
        .pipe(autoprefixer())
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('css/'))
        .pipe(dest('public/')
    );
}