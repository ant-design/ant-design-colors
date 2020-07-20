const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsconfig = require('./tsconfig.json');

gulp.task('lib', () =>
  gulp
    .src('src/**/*.ts')
    .pipe(
      ts({
        ...tsconfig.compilerOptions,
        declaration: true,
      }),
    )
    .pipe(gulp.dest('lib')),
);

gulp.task('es', () =>
  gulp
    .src('src/**/*.ts')
    .pipe(
      ts({
        ...tsconfig.compilerOptions,
        target: 'es2015',
        module: 'esnext',
        declaration: true,
        moduleResolution: 'node',
      }),
    )
    .pipe(gulp.dest('es')),
);

gulp.task('default', gulp.parallel('lib', 'es'));
