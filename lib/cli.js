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

var commentsRatio = program.ratio || 0,
    halsteadEffort = program.effort || 1000;

fs.readFile(program.args[0], { encoding: 'utf-8' }, function(err, data) {

    if(err) {
        throw err;
    }

    var report = dba(data),
        exitWithError = false;

    report.functions.forEach(function(func) {
        if(
           // compare effort
           func.halstead.effort > halsteadEffort &&
           // calculate and compare ratio
           (func.comments.length / func.sloc.logical) <= commentsRatio
        ) {
            console.log(func.line + ':' + func.name, func.halstead.effort);
            exitWithError = true;
        }
    });

    // exit with error for a "linter" purposes
    if(exitWithError) {
        process.exit(1);
    }

});
