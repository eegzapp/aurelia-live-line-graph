
import gulp from 'gulp';
import project from '../aurelia.json';
import changedInPlace from 'gulp-changed-in-place';
import merge from 'merge2';
import sourcemaps from 'gulp-sourcemaps';
import {build} from 'aurelia-cli';
import {noop} from 'gulp-util';

export default function processInBundleAssets() {
    var pipes = [];

    project.inBundleAssetProcessor.source.forEach(asset => {
        pipes.push(
            gulp.src(asset)
                .pipe(sourcemaps.init())
                .pipe(build.bundle()));
    });

    if (pipes.length > 0)
        return merge(...pipes);
    else { // Handle empty source list case.
        console.log('inBundleAssetProcessor source list is empty');
        return gulp.src("*.nonexistantfile")  // HACK: There has to be a better way, but can't figure out how to do a noop without a source.
        .pipe(noop())
    }
}