'use strict';

var fs = require('fs'),
    program = require('commander'),
    pkg = require('../package.json'),
    dba = require('./dba.js');

program
    .version(pkg.version)
    .usage('[options] <file>')
    .option('--effort <n>', 'minimum function Halstead Programming Effort (default: 1000)', parseFloat)
    .option('--ratio <n>', 'minimum function `comments count / logical sloc` ratio (default: 0)', parseFloat)
    .parse(process.argv);

if(!program.args.length) {
    program.help();
}

fs.readFile(program.args[0], { encoding: 'utf-8' }, function(err, data) {

    if(err) {
        throw err;
    }

    var report = dba(data, {
        radio: program.ratio,
        effort: program.effort
    });

    // print output
    report.forEach(function(item) {
        console.log(item.line + ':' + item.name, item.effort);
    });

    // exit with error for a "linter" purposes
    if(report.length) {
        process.exit(1);
    }

});
