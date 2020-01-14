module.exports = function () {

	$.gulp.task('scripts', function () {
		return $.gulp.src('src/js/main.js')
		.pipe($.gulp.dest('build/js/')) //куда скомпилируются файлы
		.pipe($.minifyjs()) //минификация файла
		.pipe($.gp.rename("main-min.css"))
		.pipe($.gulp.dest('build/js/'))
		.pipe($.bs.reload({
			stream: true
		}))
	});

}