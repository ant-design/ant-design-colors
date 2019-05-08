const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsconfig = require('./tsconfig.json');

gulp.task('default', () => gulp
  .src('src/**/*.ts')
  .pipe(ts({
    ...tsconfig.compilerOptions,
    declaration: true,
  }))
  .pipe(gulp.dest('lib'))
);
