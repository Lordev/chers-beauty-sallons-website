const gulp = require("gulp");
const fileInclude = require("gulp-file-include");

gulp.task("processHTML", function () {
    return gulp
        .src("src/views/build/pages/*.html")
        .pipe(
            fileInclude({
                prefix: "@@",
                basepath: "@file",
            })
        )
        .pipe(gulp.dest("./views"));
});

gulp.task("watch", function () {
    gulp.watch(
        ["src/views/build/pages/*.html", "src/views/build/partials/*.html"],
        gulp.series("processHTML")
    );
});

gulp.task("default", gulp.series("processHTML", "watch"));
