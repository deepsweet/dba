'use strict';

var report = require('./report.js');

/**
 * Try to determine a complex JS functions with
 * very low `comments / logical lines of code` ratio.
 *
 * @param {String} src input source
 * @param {Object} params params
 * @return {Object} output array
 */
module.exports = function(src, params) {

    var data = report(src),
        out = [];

    params.effort = params.effort || 1000;
    params.ratio = params.ratio || 0;

    data.functions.forEach(function(func) {
        if(
           // compare effort
           func.halstead.effort > params.effort &&
           // calculate and compare ratio
           (func.comments.length / func.sloc.logical) <= params.ratio
        ) {
            out.push({
                line: func.line,
                name: func.name,
                effort: func.halstead.effort
            });
        }
    });

    return out;

};
