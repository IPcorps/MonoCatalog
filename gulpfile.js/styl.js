
// A few 'require'
const { src, dest } = require('gulp'),
    styl = require('gulp-stylus'),
    gulpif = require('gulp-if'),
    gulprename = require("gulp-rename");

// Configuration preparation
let wdsOpt = require('./config-wds.js').styl,
    stylOpt = require('./config/config-styl.js');

exports.change = path => {

    // Pug processing
    src(path)                                                                               // Reading the file 
        .pipe(styl(stylOpt))                                                                // Stylus -> CSS
        .on('error', console.log)                                                           // For oops caught a mistake 🙀
        .pipe(gulpif(!!wdsOpt.dirFrom, gulprename(                                          // Checking and setting the path
            dir => dir.dirname = dir.dirname.replace(wdsOpt.dirFrom, wdsOpt.dirTo))))
        .pipe(dest('.'));                                                                   // Saving the file

    // To see something happen
    console.log('\x1B[90m%s \x1b[36m%s\x1b[0m', new Date().toLocaleTimeString(), path, 'processed');

}
