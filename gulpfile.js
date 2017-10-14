var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var prefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');


// initialization of browser-sync
gulp.task('browserSync',function(){
	browserSync.init({
          server: {
          	baseDir: './app'
          }    
	});
});


//initilization of sass
gulp.task('sass',function(){
	return gulp.src('app/assets/sass/*.scss')
	.pipe(plumber())
	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
	.pipe(gulp.dest('app/assets/css/main/'))
	.pipe(browserSync.reload({stream: true}))
});


//minify html
gulp.task('htmlmin',function(){
	return gulp.src('app/index.html')
	.pipe(plumber())
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist'));
});



// minify css
gulp.task('minifyCss',function() {
	return gulp.src('app/assets/css/main/style.css')
	.pipe(plumber())
	.pipe(minifyCss())
	.pipe(gulp.dest('dist/css/'))
});



// compress js
gulp.task('uglify',function() {
	return gulp.src('app/assets/js/main.js')
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/'))
});



// compress images
gulp.task('imagemin', () =>
    gulp.src('app/assets/img/*')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/'))
);



// autoprefix css
gulp.task('default', () =>
    gulp.src('app/assets/css/main/style.css')
        .pipe(plumber())  
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(concat('all.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
);


// watch all the files
gulp.task('watch',['browserSync', 'sass'], function(){
	gulp.watch('app/assets/sass/style.scss',[sass]);
	gulp.watch('app/index.html', browserSync.reload);
	gulp.watch('app/assets/js/main.js', browserSync.reload);
});