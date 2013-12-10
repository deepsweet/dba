var fs = require('fs'),
    path = require('path'),
    report = require('../../lib/report.js');

var fixture = path.resolve(__dirname, './fixture.js'),
    src = fs.readFileSync(fixture, { encoding: 'utf-8' }),
    data = report(src);

describe('report', function() {

    it('must be an object', function() {
        data.must.be.an.object();
    });

    it('.functions must be an array', function() {
        data.functions.must.be.an.array();
    });

    it('.functions[0].comments must be an array with length of 4', function() {
        data.functions[0].comments.must.be.an.array();
        data.functions[0].comments.must.have.length(4);
    });

    it('.functions[1].comments must be an array with length of 2', function() {
        data.functions[1].comments.must.be.an.array();
        data.functions[1].comments.must.have.length(2);
    });

});
