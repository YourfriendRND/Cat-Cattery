// npm init - pachage.json + npm install gulp -D
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sync = require("browser-sync").create();
const sourcemap = require("gulp-sourcemaps");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const rename = require("gulp-rename");
const svgstore = require("gulp-svgstore");
const imagemin = require('gulp-imagemin');
const uglify = require("gulp-uglify");
const del = require("del");

//Server

const server = (done) => {
    sync.init({
      server: {
        baseDir: "source"
      },
      cors: true,
      notify: false,
      ui: false,
    });
    done();
  }
  
  exports.server = server;

//Styles

const styles = () => {
    return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
        autoprefixer()
    ]))    
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

//min-styles

const minstyles = () => {
    return gulp.src("source/css/style.css")
    .pipe(postcss([
        csso()
    ]))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
}

exports.minstyles = minstyles;

// Sprites
const sprite = () => {
    return gulp.src("source/img/icons/*.svg")
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("source/img/icons"))
  }
  
exports.sprite = sprite;

//image optimization
const images = () => {
  return gulp.src("source/img/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.mozjpeg({quality: 90, progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
}

exports.images = images;

// min scripts

const scripts = () => {
  return gulp.src("source/js/*.js")
  .pipe(uglify())
  .pipe(rename({suffix: ".min.js"}))
  .pipe(gulp.dest("build/js"))
  .pipe(sync.stream())
}

exports.scripts = scripts;


//Copy

const copy = () => {
  return gulp.src([
    "source/fonts/*.{woff,woff2}",
    "source/img/icons/*.svg",
    "source/*.html",
    "source/favicon.ico", 
  ],
  {
    base: "source"
  })
  .pipe(gulp.dest("build"))
}

exports.copy = copy;

const clean = () => {
  return del("build")
}

exports.clean = clean;

//Watcher
const watcher = () => {
    gulp.watch("source/js/*.js").on("change", sync.reload);
    gulp.watch("source/less/**/*.less", gulp.series("styles"));
    gulp.watch("source/*.html").on("change", sync.reload);
}

exports.watcher = watcher; 

const build = gulp.series(
  clean,
  styles,
  gulp.parallel(copy, minstyles, scripts, images)
)

exports.build = build;

exports.default = gulp.series (
    styles, server, watcher
)
