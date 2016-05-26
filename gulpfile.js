var args = require('yargs').argv;
var del = require('del');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./gulp.config')();


gulp.task('vet', function () {
    log('Analyzing source with JSHint and JSCS');
    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose ,$.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'), {verbose: true})
        .pipe($.jshint.reporter('fail'));
});

gulp.task('styles',['clean-styles'], function () {
    log('Compiling LESS to CSS');
    return gulp
        .src(config.less)
        .pipe($.less())
        .on('error', errorLogger)
        .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest(config.temp));
});

gulp.task('clean-styles', function(done) {
    var files = config.temp + '**/*.css';
    return clean(files);
});

gulp.task('less-watcher', function () {
    gulp.watch([config.less],['styles']);
});

///////////////////

function log(msg) {
    if(typeof(msg) === 'object') {
        for(var item in msg) {
            if(msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}

function clean(path) {
    log('Removing temporary files from ' + $.util.colors.blue(path));
    return del(path);
}

function errorLogger(error) {
    log('**** Start of Error ****');
    log(error);
    log('**** End of Error ****');
    this.emit('end');
}

