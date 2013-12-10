'use strict';

var escomplex = require('escomplex'),
    esprima = require('esprima'),
    walker = require('escomplex-ast-moz');

/**
 * Extend `escomplex.analyse` report with comments.
 *
 * @param {String} src input source
 * @return {Object} output report
 */
module.exports = function(src) {

    var ast = esprima.parse(src, { loc: true, comment: true }),
        report = escomplex.analyse(ast, walker, { newmi: true });

    // collect all the comments of each escomplex reported functions
    report.functions = report.functions.map(function(func) {

        func.comments = [];

        ast.comments.forEach(function(comment) {
            var commentHeight = comment.loc.end.line - comment.loc.start.line;

            // check if comment is in function lines range
            if(
               comment.loc.start.line >= (func.line - commentHeight - 1) &&
               comment.loc.end.line <= (func.line + func.sloc.physical - 1)
            ) {
                // and push a value
                func.comments.push(comment.value);
            }
        });

        return func;

    });

    return report;

};
