var browserify = require('browserify')
    , mainfile = './main.js'
    // As of browserify 5, you must enable debug mode in the constructor to use minifyify
    , bundler = new browserify({debug: true, entries: [mainfile]})
    , fs = require('fs')
    , bundlefile = 'bundle.js'
    , mapfile = 'bundle.map.json';

bundler.plugin('minifyify', {map: mapfile});

bundler.bundle(function (err, src, map) {
    if (err) {
        console.error('error loading ', mainfile);
    } else {
        fs.writeFile(bundlefile, src);
        fs.writeFile(mapfile, map);
    }
});
