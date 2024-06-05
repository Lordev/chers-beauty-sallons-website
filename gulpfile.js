const gulp = require("gulp");
const fileInclude = require("gulp-file-include");
const replace = require("gulp-replace");
const path = require("path");

const alias = {
    "@img": "../../src/assets/img",
};

gulp.task("html", () => {
    return gulp
        .src("src/views/*.html")
        .pipe(replace(/@img/g, alias["@img"]))
        .pipe(gulp.dest("dist"));
});

gulp.task("processHTML", function () {
    return gulp
        .src("src/views/**/*.html")
        .pipe(
            fileInclude({
                prefix: "@@",
                basepath: "src/views/",
            })
        )
        .pipe(gulp.dest("./dist/views"));
});

gulp.task("watch", function () {
    gulp.watch(
        ["src/views/**/*.html", "src/views/**/*.html"],
        gulp.series("processHTML")
    );
});

gulp.task("default", gulp.series("processHTML", "watch"));
