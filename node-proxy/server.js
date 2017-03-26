var express = require('express');
var request = require('request');
var cors = require('cors');
var json2csv = require('json2csv');

var app = express();
app.use(cors());

/**
 * CSV File Generator
 */
app.get('/csv/:docName', function(req, res) {
    res.setHeader('Content-disposition', 'attachment; filename=' + req.params.docName + '.csv');
    res.setHeader('Content-type', 'text/csv');
    res.charset = 'UTF-8';

    try {
        var _fields = [{
            label: 'Substance',
            value: 'substance',
            default: 'X'
        }, {
            label: 'Test organism',
            value: 'organism',
            default: 'X'
        }, {
            label: 'Endpoint',
            value: 'endpoint',
            default: 'X'
        }, {
            label: 'Value (mg/L)',
            value: 'value',
            default: 'X'
        }, {
            label: 'Reference',
            value: 'reference',
            default: 'X'
        }];

        var _data = [{
            substance: 'Malachite green',
            organism: 'Rainbow trout (Oncorhynchus mykiss)',
            endpoint: '21 d EC50 growth rate',
            value: 0.68,
            reference: 'Smith et al. 2017'
        }, {
            substance: 'Crystal violet',
            organism: 'Water flea (Daphnia magna)',
            endpoint: '48 h EC50 immobilization',
            value: 4.5,
            reference: 'Johnson and Jones 2010'
        }, {
            substance: undefined,
            organism: undefined,
            endpoint: '96 h LC50 mortality',
            value: undefined,
            reference: undefined
        }];

        res.write(json2csv({
            data: _data,
            fields: _fields
        }));
    } catch (err) {
        res.write(err);
    }

    res.end();
});

/**
 * TXT File Generator
 */
app.get('/txt/:docName', function(req, res) {
    res.setHeader('Content-disposition', 'attachment; filename=' + req.params.docName + '.txt');
    res.setHeader('Content-type', 'text/plain');
    res.charset = 'UTF-8';

    var url = 'http://iuclid.ca:3000/iuclid6-ext/api/ext/v1/definition/document/' + req.params.docName;
    var options = {
        url: url,
        params: {
            '_c': new Date().getTime()
        },
        headers: {
            'Accept': 'application/vnd.iuclid6.ext+json;type=iuclid6.Definition'
        }
    };

    request(options, function(error, response, body) {
        if (error) {
            res.write('Error: ' + error);
        } else {
            body = JSON.parse(body);

            res.write(body.identifier + '\n');
            function parse(contents) {
                if (contents && contents.length > 0) {
                    contents.forEach(function(content) {
                        if (content) {
                            if (content.type === 'block') {
                                res.write('\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');
                                res.write(content.title + '\n');
                                res.write('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');
                                parse(content.contents);
                            } else {
                                res.write(content.type + ': ' + content.title + '\n');
                            }
                        }
                    });
                }
            }

            parse(body.contents);
        }

        res.end();
    });
});

app.use('/', function(req, res) {
    var url = 'http://127.0.0.1:8080' + req.url;
    req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000);