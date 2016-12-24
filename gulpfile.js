var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');


gulp.task('imgmin', function() {
  return gulp.src('client/images/**/*')
    .pipe(imagemin([
      // imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng(),
      // imagemin.svgo([{removeViewBox: false}, {minifyStyles: false}])
    ], {verbose: true}))
    .pipe(gulp.dest('images'));
});


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'D:\/wamp\/www\/angularjs'
    },
  })
})

gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))     
});
 


// gulp.task('compass', function() {
//   gulp.src('sass/*.scss')
// 	// .pipe(sass({ compass: true, sourcemap: true, style: 'compressed' }))
//     .pipe(compass({
//       config_file: 'config.rb',
//       css: 'css',
//       sass: 'sass',
//       image: 'images'
//     }))
//     .pipe(gulp.dest('css'))
//     .pipe(browserSync.reload({
//       stream: true
//     }))    
//     // .pipe(gulp.dest('app/assets/temp'));
// });

gulp.task('myBuild', function() {
    return gulp.src('client/js/*.js')
      .pipe(concat('main.js'))
      .pipe(minify())
      .pipe(gulp.dest('build/js'));
});


gulp.task('watch',['browserSync','sass','imgmin'], function() {
   // Watch .js files
  gulp.watch('client/js/*.js', ['scripts']);
   // Watch .scss files
  gulp.watch('sass/*.scss', ['sass']);
   // Watch image files
  gulp.watch('client/images/**/*', ['imgmin']);
 });



gulp.task('default', ['myBuild','imgmin','sass','watch']);