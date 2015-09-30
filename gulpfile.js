'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var newer = require('gulp-newer');
var ghPages = require('gulp-gh-pages');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var gls = require('gulp-live-server');
var open = require('open');

// Default task and watch configuration
gulp.task('default',
  ['jade', 'sass', 'vendor', 'lint', 'imagemin', 'dev-server', 'watch']
);

gulp.task('watch', function () {
  gulp.watch('./assets/sass/**/*.sass', ['sass']);
  gulp.watch('./assets/js/**/*.js', ['lint']);
  gulp.watch('./assets/vendor/**/*', ['vendor']);
  gulp.watch('./assets/jade/**/*.jade', ['jade']);
  gulp.watch('./assets/images/**/*', ['imagemin']);
});

// Generate HTML via jade
gulp.task('jade', function () {
  return gulp.src('./assets/jade/**/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./dist'));
});

// Generate css via libsass
gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*.sass')
    .pipe(sass({
      indentedSyntax: true,
      errLogToConsole: true,
      includePaths: ['./assets/vendor/normalize-scss/']
    }))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('./dist/assets/css'));
});

// Keep vendor libraries in sync
gulp.task('vendor', function () {
  return gulp.src('./assets/vendor/**/*')
    .pipe(gulp.dest('./dist/assets/vendor'));
});

// Javscript linting
gulp.task('lint', function () {
  return gulp.src('./assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('./dist/assets/js'));
});

// Minimize images without quality loss
gulp.task('imagemin', function () {
  var dest = './dist/assets/images';
  return gulp.src('./assets/images/**/*')
    .pipe(newer(dest))
    .pipe(imagemin())
    .pipe(gulp.dest(dest));
});

// Deploy to Github pages
gulp.task('deploy', ['deploy-minifyjs', 'deploy-minifycss'], function () {
  return gulp.src('./dist-minified/**/*')
    .pipe(ghPages());
});

gulp.task('deploy-prepare', function () {
  return gulp.src('./dist/**/*')
    .pipe(gulp.dest('./dist-minified'));
});

gulp.task('deploy-minifyjs', ['deploy-prepare'], function () {
  return gulp.src('./dist-minified/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist-minified'));
});

gulp.task('deploy-minifycss', ['deploy-prepare'], function () {
  return gulp.src('./dist-minified/**/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist-minified'));
});

// Development server
gulp.task('dev-server', function () {
  var server = gls.static(['dist'], '3001');
  server.start();

  gulp.watch('./dist/**/*', function () {
    server.notify.apply(server, arguments);
  });

  open('http://localhost:3001');
});
