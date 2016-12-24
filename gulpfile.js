var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var spritesmith  = require('gulp.spritesmith');


gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('client/images/spr/*.*') 
            .pipe(spritesmith({
                imgName: '../images/sprite.png',
                cssName: '_sprite.scss',
                cssFormat: 'scss',
                algorithm: 'binary-tree',
                cssTemplate: 'handlebarsInheritance.scss.handlebars',
                cssVarMap: function(sprite) {
                    sprite.name = 's-' + sprite.name
                }
            }));

    spriteData.img.pipe(gulp.dest('images/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('sass/')); // путь, куда сохраняем стили
});


gulp.task('images', function() {
  return gulp.src('client/images/**/*')
    .pipe(imagemin([
      // imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng(),
      // imagemin.svgo([{removeViewBox: false}, {minifyStyles: false}])
    ], {verbose: true}))
    .pipe(cache(imagemin({
        interlaced: true
      })))

    .pipe(gulp.dest('images'));
});

// gulp.task('clean:dist', function() {
//   return del.sync('dist');
// })

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

gulp.task('scripts', function() {
    return gulp.src('client/js/*.js')
      .pipe(concat('main.js'))
      .pipe(minify())
      .pipe(gulp.dest('build/js'));
});


gulp.task('watch',['sass','browserSync'], function() {
   // Watch .js files
  gulp.watch('client/js/*.js', ['scripts']);
   // Watch .scss files
  gulp.watch('sass/*.scss', ['sass']);
   // Watch image files
  gulp.watch('client/images/**/*', ['images']);
  // gulp.watch('images/**/*', ['images']);
  gulp.watch('*.html', browserSync.reload); 
 });


gulp.task('default', ['sprite','scripts','images','watch']);
