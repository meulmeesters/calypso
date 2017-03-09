var express = require('express');
var request = require('request');
var cors = require('cors');

var app = express();
app.use(cors());

app.use('/txt/:docName', function(req, res) {
    res.setHeader('Content-disposition', 'attachment; filename=iuclid-document.txt');
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