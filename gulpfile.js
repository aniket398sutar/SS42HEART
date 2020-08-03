const gulp = require('gulp');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const browserSync = require('browser-sync').create();

const scripts = require('./scripts');
const styles = require('./styles');

// Some pointless comments for our project.
var devMode = false;

gulp.task('css', async function () {
    return gulp.src(['src/**/*.css'])
        .pipe(gulp.dest('./dist/'))
});

gulp.task('js', async function () {
    return gulp.src(['src/**/*.js'])
        .pipe(gulp.dest('./dist/'))
});

gulp.task('html', async function () {
    gulp.src('src/index.html')
        .pipe(gulp.dest('./dist'));
    return gulp.src('src/views/**/*.html')
        .pipe(gulp.dest('./dist/views/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build', gulp.series(['css', 'js', 'html']), async function () {
    console.log("Done");
    return 0;
});

gulp.task('browser-sync', function () {
    browserSync.init(null, {
        open: false,
        server: {
            baseDir: 'src',
        }
    });
});

gulp.task('connect', function () {
  connect.server({
    root: 'src/',
    port: 3000
  });
});

gulp.task('start', function () {
    devMode = true;
    gulp.start(['build', 'browser-sync']);
    gulp.watch(['src/css/**/*.css'], ['css']);
    gulp.watch(['src/js/**/*.js'], ['js']);
    gulp.watch(['src/views/**/*.html'], ['html']);
});
