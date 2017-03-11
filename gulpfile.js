var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var ts = require('gulp-typescript');
var del = require('del');
var templateCache = require('gulp-angular-templatecache');

var SRC = './app';
var BUILD = './.tmp';
var DEST = './calypso';

var bundle = {
    name: 'calypso'
};

gulp.task('clean:build', function() {
    del([BUILD + '/*']).then(function(paths) {
        console.log('BUILD: Deleted files and folders:\n', paths.join('\n'));
    });
});

gulp.task('clean:dest', function() {
    del([DEST + '/css', DEST + '/js', DEST + '/templates']).then(function(paths) {
        console.log('DEST: Deleted files and folders:\n', paths.join('\n'));
    });
});

gulp.task('copy:build', function(done) {
    gulp.src(SRC + '/**/*')
        .pipe(gulp.dest(BUILD))
        .on('end', done);
});

gulp.task('copy:dest', function(done) {
    gulp.src([
        BUILD + '/favicon.ico',
        BUILD + '/**/*.html',
        BUILD + '/css/' + bundle.name + '.css',
        BUILD + '/css/' + bundle.name + '.min.css',
        BUILD + '/js/' + bundle.name + '.js',
        BUILD + '/js/' + bundle.name + '.min.js'
    ], {
        base: BUILD
    })
    .pipe(gulp.dest(DEST))
    .on('end', done);
});

gulp.task('compile:sass', function(done) {
    gulp.src(BUILD + '/scss/main.scss')
        .pipe(sass())
        .on('error', gutil.log)
        .pipe(rename({ basename: bundle.name }))
        .pipe(gulp.dest(BUILD + '/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(BUILD + '/css/'))
        .on('end', done);
});

gulp.task('compile:ts', function() {
    return gulp.src(['./typings/**/*.ts', BUILD + '/js/**/*.ts'])
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(gulp.dest(BUILD + '/js/'));
});

gulp.task('compile:templates', function () {
    return gulp.src(BUILD + '/templates/**/*.html')
        .pipe(templateCache({
            module: 'calypso',
            transformUrl: function(url) {
                return '/templates/' + url;
            }
        }))
        .pipe(gulp.dest(BUILD + '/js'));
});

gulp.task('concat:build', function() {
    return gulp.src([
            BUILD + '/js/constant/**/*.js',
            BUILD + '/js/app.js',
            BUILD + '/js/**/*.js'
        ])
        .pipe(concat(bundle.name + '.js'))
        .pipe(gulp.dest(BUILD + '/js'));
});

gulp.task('minify:js', function() {
    return gulp.src(BUILD + '/js/' + bundle.name + '.js')
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(BUILD + '/js'));
});

gulp.task('watch', function() {
  gulp.watch(SRC + '/**/*', ['build:local']);
});

gulp.task('build:local', gulpsync.sync([
    'clean:build',
    'clean:dest',
    'copy:build',
    'compile:sass',
    'compile:ts',
    'compile:templates',
    'concat:build',
    'minify:js',
    'copy:dest'
]));

gulp.task('default', [
    'build:local'
]);
