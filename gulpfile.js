//เรียก gulp 
var gulp = require('gulp');

// เรียก plug in ของ gulp
//css
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

//js
var concat = require('gulp-concat');



//------var paths
var BASE = {
    src: 'src/',
    dist: 'dist/'
};

var sassFiles = {
    src: './' + BASE.src + 'assets/styles/sass/*.scss',
};

var cssDest = {
    dist: './' + BASE.dist + 'assets/styles/css',

};



var JsPath = {
    dist: './' + BASE.dist + 'assets/styles/js',
};

//js file

var Js = {
    src: [

        //vender

        './' + BASE.src + 'assets/styles/js/vender/jquery-3.3.1.min.js',
        './' + BASE.src + 'assets/styles/js/vender/smooth-scrollbar.js',
        './' + BASE.src + 'assets/styles/js/vender/slick.js',
        //Js      
        './' + BASE.src + 'assets/styles/js/animation.js',
        './' + BASE.src + 'assets/styles/js/scrollsmooth.js',
        './' + BASE.src + 'assets/styles/js/slick-c.js',
    ],


    filename: 'main.js',
};



// กำหนดว่าจะให้ autoprefixer ใส่ vendor prefixes เพื่อรองรับ browser รุ่นไหนบ้าง
var browser_support = [
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 31',
    'chrome >= 36',
    'safari >= 6',
    'ios >= 6',
    'android >= 4'
];


//compile  sass to css
gulp.task('sass', function () {
    gulp.src(sassFiles.src)
        .pipe(sass().on('error', sass.logError))

        // ใส่ vendor prefixes ให้ไฟล์เหล่านั้น โดยใช้ autoprefixer
        // .pipe(autoprefixer(browser_support))

        .pipe(gulp.dest(cssDest.dist));
});






//-- compact js to filename
gulp.task('combineJs', function () {
    return gulp.src(Js.src)
        .pipe(concat(Js.filename))
        .pipe(gulp.dest(JsPath.dist));
});

// watch changing all time
gulp.task('watch', function () {
    gulp.watch(sassFiles.src, ['sass']);
    gulp.watch(Js.src, ['combineJs']);
    gulp.watch(cssDest.dist + '/main.css', ['minifyCss']);
});


// var uglify = require('gulp-uglify');
// var pump = require('pump');

// gulp.task('compress', function (cb) {
//     pump([
//             gulp.src(Js.srcformin),
//             uglify(),
//             gulp.dest('./' + BASE.src + 'assets/styles/js/minify')
//         ],
//         cb
//     );
// });
gulp.task('default',['sass','combineJs','watch'],function(){

});


//minify css
// gulp.task('minifyCss', () => {
//     return gulp.src(cssDest.dist + '/main.css')
//         .pipe(cleanCSS({
//             compatibility: 'ie8'
//         }))
//         .pipe(gulp.dest(cssDest.dist));
// });
