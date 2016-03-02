const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');

//////////////////
// Copy package.json to build folder
/////////////////
gulp.task('move', function() {
  gulp.src('src/public/scripts/**/*.*')
    .pipe(gulp.dest('./build/public/scripts'))
});

gulp.task('index_page', function() {
  gulp.src('./src/public/index.html')
    .on('error', function(e) {
      console.log('HTML ERROR >>>> ', e.message)
      this.emit('end');
    })
    .pipe(gulp.dest('./build/public'));
});

gulp.task('styles', function() {
  gulp.src('./src/public/styles.css')
    .on('error', function(e) {
      console.log('CSS ERROR >>>> ', e.message)
      this.emit('end');
    })
    .pipe(gulp.dest('./build/public'));
});

gulp.task('babel', function() {
  // add function to ignore the scripts after initial build
  gulp.src(['src/**/*.js', '!src/public/scripts/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .on('error', function(e) {
      console.log('BABEL ERROR >>>> ', e.message)
      this.emit('end')
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build'));
});

gulp.task('develop', function() {
  nodemon({
    script: './build/server.js',
    ext: 'html js',
    delay: 2000
  })
  .on('restart', function() {
    console.log('restarted!')
  })
});

gulp.task('watch', ['babel', 'move', 'index_page', 'styles'], function() {
  gulp.watch('./src/**/*.css', ['styles']);
  gulp.watch('./src/**/*.html', ['index_page']);
  gulp.watch(['./src/**/*.js', '!src/public/scripts/**/*.js'], ['babel']);
});

gulp.task('default', ['develop', 'watch']);
