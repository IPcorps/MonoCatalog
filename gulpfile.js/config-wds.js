
// For WebDevSynergy

module.exports = {
    ts: {
        use: true,              // TypeScript -> JavaScript
        // dirFrom: "app",      // Replacing the path from
        // dirTo: "out_js",     // Replacing the path to
        mini: true,             // Using minification
        extjs: ".m.js",         // Output file extension
        middle: true,           // Saving an intermediate non-minified file during minification.
        dts: true               // Creating a declaration file
    },
    pug: {
        use: true,              // Pug -> HTML
        // dirFrom: "app",      // Replacing the path from
        // dirTo: "out_html"    // Replacing the path to
    },
    styl: {
        use: true,              // Stylus -> CSS
        // dirFrom: "app",      // Replacing the path from
        // dirTo: "out_css"     // Replacing the path to
    }
}
