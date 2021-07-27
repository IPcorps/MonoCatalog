
// A few "require"
const { src, dest } = require("gulp"),
    ts = require("gulp-typescript"),
    terser = require("gulp-terser"),
    gulprename = require("gulp-rename");

let tsProject = ts.createProject("tsconfig.json");

exports.change = path => {

    // TypeScript processing
    const tsRes = src(path)                                                                 // Reading the file 
        .pipe(tsProject())                                                                  // TypeScript -> JavaScript
        .on("error", console.log);                                                          // For oops caught a mistake 🙀

    tsRes.js.pipe(terser())                                                                 // Javascript minifier and ... what else you want
        .pipe(gulprename(                                                                   // Checking and setting the path
            dir => dir.dirname = dir.dirname.replace("ext\\src", "ext")))
        .pipe(dest("."));                                                                   // Saving the file

    tsRes.dts.pipe(dest("."));                                                              // Saving the d.ts file

    // To see something happen
    console.log("\x1B[90m%s \x1b[36m%s\x1b[0m", new Date().toLocaleTimeString(), path, "processed");

}
