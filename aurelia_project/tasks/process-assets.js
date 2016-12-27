
import gulp from 'gulp';
import project from '../aurelia.json';
import changedInPlace from 'gulp-changed-in-place';
import merge from 'merge2';

export default function processAssets() {
    var pipes = [];

    project.assetProcessor.source.forEach(asset => {
        pipes.push(
            gulp.src(asset)
                .pipe(changedInPlace({firstPass: true}))
                .pipe(gulp.dest(project.platform.output)));
    });

    return merge(...pipes);
}