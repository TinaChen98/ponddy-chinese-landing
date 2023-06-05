import gulp from "gulp";
import cp from "child_process";
import gutil from "gulp-util";
import postcss from "gulp-postcss";
import cssImport from "postcss-import";
import cssnext from "postcss-cssnext";
import BrowserSync from "browser-sync";
import webpack from "webpack";
import webpackConfig from "./webpack.conf";
import svgstore from "gulp-svgstore";
import svgmin from "gulp-svgmin";
import inject from "gulp-inject";
import cssnano from "cssnano";
import cleanCSS from "gulp-clean-css";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import concat from "gulp-concat";
import imagemin from "gulp-imagemin";

const browserSync = BrowserSync.create();
const hugoBin = `./bin/hugo.${process.platform === "win32" ? "exe" : process.platform}`;
const defaultArgs = ["-d", "../dist", "-s", "site"];

if (process.env.DEBUG) {
  defaultArgs.unshift("--debug");
}

gulp.task("hugo-complete", ["concatAiCss", "concatHomeschoolCss", "concatCareerCss",
  "concatVoiceWidgetCss", "concatProductsCss", "concatDictionaryCss",
  "concatAiJs", "concatHomeschoolJs", "concatCareerJs", "concatDictionaryJs",
  "concatVoiceWidgetJs", "copy-voice-widget-assets", "image", "app-ads"
], (cb) => buildSite(cb));
gulp.task("hugo", (cb) => buildSite(cb));
gulp.task("hugo-preview", (cb) => buildSite(cb, ["--buildDrafts", "--buildFuture"]));
gulp.task("build", ["concatAiCss", "concatHomeschoolCss", "concatCareerCss",
  "concatVoiceWidgetCss", "concatProductsCss", "concatDictionaryCss",
  "concatAiJs", "concatHomeschoolJs", "concatCareerJs", "concatVoiceWidgetJs", "concatDictionaryJs",
  "css", "js", "hugo", "copy-voice-widget-assets", "image", "app-ads"
]);
gulp.task("build-preview", ["concatAiCss", "concatHomeschoolCss", "concatCareerCss",
    "concatVoiceWidgetCss", "concatProductsCss", "concatDictionaryCss",
  "concatAiJs", "concatHomeschoolJs", "concatCareerJs", "concatVoiceWidgetJs", "concatDictionaryJs",
  "css", "js", "hugo-preview", "copy-voice-widget-assets", "image", "app-ads"
]);

gulp.task("concatAiCss", function() {
  gulp.src(["./site/static/public/vender/bootstrap.min.css",
    "./site/static/public/vender/fontawesome.css",
    "./site/static/public/vender/ProximaNova.css",
    "./site/static/public/vender/owl.carousel.min.css",
    "./site/static/public/vender/owl.theme.default.min.css",
    "./site/static/public/vender/animated-headlines.css",
    "./site/static/public/css/ai.css"
  ])
    .pipe(concat("ai-dist.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dist/public/css/"))
    .pipe(browserSync.stream());
});

gulp.task("concatProductsCss", function() {
  gulp.src(["./site/static/public/vender/bootstrap.min.css",
    "./site/static/public/vender/fontawesome.css",
    "./site/static/public/vender/ProximaNova.css",
    "./site/static/public/vender/owl.carousel.min.css",
    "./site/static/public/vender/owl.theme.default.min.css",
    "./site/static/public/vender/animated-headlines.css",
    "./site/static/public/css/products.css"
  ])
    .pipe(concat("products-dist.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dist/public/css/"))
    .pipe(browserSync.stream());
});

gulp.task("concatDictionaryCss", function() {
  gulp.src(["./site/static/public/vender/bootstrap-grid.css",
    "./site/static/public/vender/chinese-landing-elements.css",
    ".site/static/public/vender/ponddy-guidline.min.css",
  ])
    .pipe(concat("dictionary-dist.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dist/public/css/"))
    .pipe(browserSync.stream());
});

gulp.task("concatHomeschoolCss", function() {
  gulp.src(["./site/static/public/vender/bootstrap.min.css",
    "./site/static/public/vender/fontawesome.css",
    "./site/static/public/vender/ProximaNova.css",
    "./site/static/public/vender/owl.carousel.min.css",
    "./site/static/public/vender/owl.theme.default.min.css",
    "./site/static/public/css/homeschool.css",
    "./node_modules/ponddy-guideline/style/ponddy-guidline.min.css"
  ])
    .pipe(concat("homeschool-dist.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dist/public/css/"))
    .pipe(browserSync.stream());
});
gulp.task("concatCareerCss", function() {
  gulp.src(["./site/static/public/vender/bootstrap.min.css",
    "./site/static/public/vender/fontawesome.css",
    "./site/static/public/vender/ProximaNova.css",
    "./site/static/public/vender/owl.carousel.min.css",
    "./site/static/public/vender/owl.theme.default.min.css",
    "./site/static/public/css/career.css"
  ])
    .pipe(concat("career-dist.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dist/public/css/"))
    .pipe(browserSync.stream());
});
gulp.task("concatVoiceWidgetCss", function() {
  gulp.src([
    "./site/static/public/vender/fontawesome.css",
    "./site/static/public/vender/ProximaNova.css",
    "./site/static/public/vender/owl.carousel.min.css",
    "./site/static/public/css/main.css",
    "./site/static/public/vender/voice-widget.min.css",
    ".site/static/public/vender/ponddy-guidline.min.css",
    "site/static/public/vender/deeppurple-amber.css",
    "./site/static/public/css/voice-widget.min.css",
    "./site/static/public/vender/owl.theme.default.min.css",
  ])
    .pipe(concat("voice-widget.min-dist.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dist/public/css/"))
    .pipe(browserSync.stream());
});
gulp.task("concatAiJs", function() {
  gulp.src(["./site/static/public/vender/jquery-3.3.1.min.js",
    "./site/static/public/vender/popper.min.js",
    "./site/static/public/vender/bootstrap.min.js",
    "./site/static/public/vender/owl.carousel.min.js",
    "./site/static/public/vender/lazyload.min.js",
    "./site/static/public/vender/animated-headlines.js",
    "./site/static/public/vender/voice-widget.js",
    "./site/static/public/vender/particles.js",
    "./site/static/public/js/ai.js",
    "./site/static/public/js/post-credits-scene.js"
  ])
    .pipe(concat("ai-dist.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/public/js/"))
    .pipe(browserSync.stream());
});

gulp.task("concatDictionaryJs", function() {
  gulp.src(["./site/static/public/vender/jquery-3.3.1.min.js",
    "./site/static/public/vender/chinese-landing-elements.js",
    "./site/static/public/vender/bootstrap.min.js",
  ])
    .pipe(concat("dictionary-dist.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/public/js/"))
    .pipe(browserSync.stream());
});

gulp.task("concatHomeschoolJs", function() {
  gulp.src(["./site/static/public/vender/jquery-3.3.1.min.js",
    "./site/static/public/js/qrcode.js",
    "./site/static/public/vender/popper.min.js",
    "./site/static/public/vender/bootstrap.min.js",
    "./site/static/public/vender/owl.carousel.min.js",
    "./site/static/public/vender/lazyload.min.js",
    "./site/static/public/js/homeschool.js",
    "./site/static/public/js/post-credits-scene.js"
  ])
    .pipe(concat("homeschool-dist.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/public/js/"))
    .pipe(browserSync.stream());
});
gulp.task("concatCareerJs", function() {
  gulp.src(["./site/static/public/vender/jquery-3.3.1.min.js",
    "./site/static/public/vender/popper.min.js",
    "./site/static/public/vender/bootstrap.min.js",
    "./site/static/public/vender/owl.carousel.min.js",
    "./site/static/public/vender/lazyload.min.js",
    "./site/static/public/js/career.js",
    "./site/static/public/js/post-credits-scene.js"
  ])
    .pipe(concat("career-dist.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/public/js/"))
    .pipe(browserSync.stream());
});
gulp.task("concatVoiceWidgetJs", function() {
  gulp.src(["./site/static/public/vender/jquery-3.3.1.min.js",
    "./site/static/public/vender/popper.min.js",
    "./site/static/public/vender/bootstrap.min.js",
    "./site/static/public/vender/owl.carousel.min.js",
    "./site/static/public/vender/lazyload.min.js",
    "./site/static/public/vender/voice-widget.js",
    "./site/static/public/js/post-credits-scene.js"
  ])
    .pipe(concat("voice-widget-dist.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/public/js/"))
    .pipe(browserSync.stream());
});
gulp.task("image", function() {
  gulp.src("./site/static/public/images/**")
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest("./dist/public/images"));
});

// gulp.task("copy-voice-widget", function () {
//     gulp.src(['./site/voice-widget/**'])
//         .pipe(gulp.dest('./dist/voice-widget'));
// })
// gulp.task("copy-voice-widget",function () {
//   gulp.src(['!./site/assets','./site/voice-widget/*.js','./site/voice-widget/*.html','./site/voice-widget/*.'])
//       .pipe(gulp.dest('./dist/voice-widget'));
// })
gulp.task("copy-voice-widget-assets", function() {
  gulp.src("./site/voice-widget/assets/**")
    .pipe(gulp.dest("./dist/voice-widget/assets"));
});

gulp.task("app-ads", function() {
  gulp.src("./site/layouts/app-ads.txt")
    .pipe(gulp.dest("./dist"));
});

gulp.task("css", () => (
  gulp.src("./src/css/*.css")
    .pipe(postcss([
      cssImport({from: "./src/css/main.css"}),
      cssnext(),
      cssnano(),
    ]))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream())
));

gulp.task("js", (cb) => {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true,
      progress: true
    }));
    browserSync.reload();
    cb();
  });
});

gulp.task("svg", () => {
  const svgs = gulp
    .src("site/static/img/icons-*.svg")
    .pipe(svgmin())
    .pipe(svgstore({inlineSvg: true}));

  function fileContents(filePath, file) {
    return file.contents.toString();
  }

  return gulp
    .src("site/layouts/partials/svg.html")
    .pipe(inject(svgs, {transform: fileContents}))
    .pipe(gulp.dest("site/layouts/partials/"));
});

gulp.task("server", ["hugo-complete"], () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    port: 4200
  });
  gulp.watch("./src/js/**/*.js", ["js"]);
  gulp.watch("./src/css/**/*.css", ["css"]);
  gulp.watch("./site/static/img/icons-*.svg", ["svg"]);
  gulp.watch(["./site/**/*", "!./site/static/public/**/*"], ["hugo"]);
  gulp.watch(["./site/static/public/js/ai.js",
    "./site/static/public/js/post-credits-scene.js"
  ], ["concatAiJs", "hugo"]);
  gulp.watch(["./site/static/public/js/homeschool.js",
    "./site/static/public/js/post-credits-scene.js",
    "./site/static/public/js/qrcode.js"
  ], ["concatHomeschoolJs", "hugo"]);
  gulp.watch(["./site/static/public/js/career.js",
    "./site/static/public/js/post-credits-scene.js"
  ], ["concatCareerJs", "hugo"]);
  gulp.watch("./site/static/public/css/ai.css", ["concatAiCss", "hugo"]);
  gulp.watch("./site/static/public/css/products.css", ["concatAiCss", "hugo"]);
  gulp.watch("./site/static/public/css/homeschool.css", ["concatHomeschoolCss", "hugo"]);
  gulp.watch("./site/static/public/css/career.css", ["concatCareerCss", "hugo"]);
  gulp.watch("./site/static/public/css/voice-widget.min.css", ["concatVoiceWidgetCss", "hugo"]);

});

function buildSite(cb, options) {
  const args = options ? defaultArgs.concat(options) : defaultArgs;

  return cp.spawn(hugoBin, args, {stdio: "inherit"}).on("close", (code) => {
    if (code === 0) {
      browserSync.reload("notify:false");
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}
