
// File extension router

const { watch } = require("gulp");

exports.watcher = () => {

    // TypeScript -> JavaScript
    const ts = require("./ts");
    watch(["ext/src/**/*.ts", "!**/*.d.*"])
        .on("change", ts.change);

};
