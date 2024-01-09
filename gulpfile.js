const gulp = require("gulp");
const handlebars = require("gulp-handlebars");
const wrap = require("gulp-wrap");
const declare = require("gulp-declare");
const concat = require("gulp-concat");

// Compile Handlebars templates
gulp.task("handlebars", () => {
    return gulp
        .src(["src/templates/common.hbs", "src/templates/*.hbs"])
        .pipe(handlebars())
        .pipe(wrap("Handlebars.template(<%= contents %>)"))
        .pipe(
            declare({
                namespace: "YourApp.templates",
                noRedeclare: true,
            })
        )
        .pipe(concat("templates.js"))
        .pipe(gulp.dest("dist/js"));
});

// Default task
gulp.task("default", gulp.series("handlebars"));
