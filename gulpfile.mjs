import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import imagemin, { gifsicle, mozjpeg, optipng } from 'gulp-imagemin';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import htmlmin from 'gulp-htmlmin';

const sass = gulpSass(dartSass);

// Define paths
const paths = {
	html: {
		src: 'src/views/*.html',
		dest: 'dist',
	},
	images: {
		src: 'src/assets/img/**/*.{jpg,jpeg,png,gif,svg}',
		dest: 'dist/assets/img',
	},
	sass: {
		src: 'src/sass/main.scss',
		dest: 'dist/css',
	},
};

// Define the image optimization task
export function processImages() {
	return gulp
		.src(paths.images.src)
		.pipe(
			imagemin(
				[
					gifsicle({ interlaced: true }),
					mozjpeg({ quality: 80, progressive: true }),
					optipng({ optimizationLevel: 5 }),
				],
				{
					verbose: true,
				}
			)
		)
		.pipe(gulp.dest(paths.images.dest));
}

// Define the HTML processing task
export function processHTML() {
	return gulp
		.src(paths.html.src)
		.pipe(
			fileInclude({
				prefix: '@@',
				basepath: 'src/views/',
			})
		)
		.pipe(gulp.dest('./dist/views'));
}

// Define the HTML inclusion task
export function processSass() {
	return gulp
		.src(paths.sass.src)
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(gulp.dest(paths.sass.dest, { sourcemaps: '../sourcemaps/' }));
}

// Minify HTML for production
export function minifyHTML() {
	return gulp
		.src(paths.html.src)
		.pipe(
			fileInclude({
				prefix: '@@',
				basepath: 'src/views/',
			})
		)
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest(paths.html.dest));
}

// Define the production build task
export const build = gulp.series(
	gulp.parallel(minifyHTML, processSass, processImages)
);

// Define the watch task
export function watch() {
	gulp.watch('src/views/**/*.html', gulp.series(processHTML));
	gulp.watch(paths.images.src, gulp.series(processImages));
	gulp.watch('src/sass/**/*.scss', gulp.series(processSass));
}

// Default task
export default gulp.series(processHTML, processSass, watch);
