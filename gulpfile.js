global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),
  path: {
    serverDir: './app/dist/',
    config: require('./gulp/config'),
    src: {
      html: './app/src/*.{pug, html}',
      css: './app/src/styles/main.scss',
      js: './app/src/scripts/main.js',
      img: './app/src/images/*.{jpeg,jpg,webp,png}',
      font: './app/src/fonts/**/*.ttf'
    },
    build: {
      html: './app/dist/',
      css: './app/dist/styles/',
      js: './app/dist/scripts/',
      img: './app/dist/images/',
      font: './app/dist/fonts/'
    },
    watch: {
      html: ['./app/src/*.{pug, html}', './app/src/views/**/*.{pug, html}'],
      css: ['./app/src/styles/', './app/src/styles/**/*.scss'],
      js: './app/src/scripts/*.js',
      img: './app/src/images/**/*.*',
      font: './app/src/fonts/**/*.ttf'
    }
  }
}
$.path.config.forEach(path => require(path)())
$.gulp.task('default', $.gulp.series($.gulp.parallel('html', 'css','serve', 'js', 'img','font', 'watch')))