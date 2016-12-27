import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';
import merge from 'merge2';

export default function processCSS() {
  /** original (only read single css source) 
  return gulp.src(project.cssProcessor.source)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(build.bundle());
  */

    var pipes = [];

    project.cssProcessor.source.forEach(cssSource => {
        pipes.push(
            gulp.src(cssSource)
              .pipe(sourcemaps.init())
              .pipe(sass().on('error', sass.logError))
              .pipe(build.bundle()));
    });

    return merge(...pipes);
}
