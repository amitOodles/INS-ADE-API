const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var pdf = require('html-pdf');
var fs = require('fs');
var webshot = require('webshot');
var async = require('async');
var http = require("http");
var ejs = require('ejs');

app.use(bodyParser.json());

app.use("/css", express.static(__dirname + '/css'));

app.use("/js", express.static(__dirname + '/js'));

app.use("/images", express.static(__dirname + '/images'));

app.use("/fonts", express.static(__dirname + '/fonts'));

app.set('view engine', 'ejs');

app.use("/download", express.static(__dirname + '/uploads'));

var webshotOptions = {
    // screenSize: {
    //   width: 768
    // , height: 2010
    // },
    shotSize: {
        width: 900,
        height: "all"
    }
};

app.listen(3001, function() {
    console.log('listening on 3001');
})

app.get('/query', function(req, res) {

    var data = postDataIAC;

    res.render(__dirname + '/index.ejs', {
        data: data,
    });
});
app.post('/webshot', function(req, res, callback) {

    postDataIAC = req.body;


    var timeS = new Date;
    var name = timeS.getTime() + ".png";

    function generateImage() {
        webshot('http://180.151.85.194:3001/query', 'uploads/' + name, webshotOptions, function(err, data) {
            // res.write("error saving");

            if (err) {
                var resErr = new Error("Unable to generate Insurance Adequacy chart");
                resErr.status = 400;
                console.log("error occured", resErr);
                callback(resErr);
            } else {
                var img = fs.readFileSync('uploads/' + name);
                console.log('uploads/' + name);
                fs.unlink('uploads/' + name);
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.end(img, 'binary');
            }


        });
    }

    generateImage();

    // res.redirect("/query");
});
app.get('/querySFC', function(req, res) {

    var data = postDataSFC;
    res.render(__dirname + '/indexSFC.ejs', {
        data: data,
    });
});
app.post('/webshotSFC', function(req, res, callback) {

    postDataSFC = req.body;

    var timeS = new Date;
    var name = timeS.getTime() + "SFC.png";

    function generateImage() {
        webshot('http://180.151.85.194:3001/querySFC', 'uploads/' + name, { shotSize: { width: 630, height: 520 } }, function(err, data) {
            // res.write("error saving");

            if (err) {
                var resErr = new Error("Unable to generate Insurance Adequacy chart");
                resErr.status = 400;
                console.log("error occured", resErr);
                callback(resErr);
            } else {
                var img = fs.readFileSync('uploads/' + name);
                console.log('uploads/' + name);
                //fs.unlink('uploads/' + name);
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.end(img, 'binary');
            }


        });
    }

    generateImage();
});
app.get('/webshotTTR', function(req, res, callback) {

    // postDataSFC = req.body;

    var ageWs = req.query.age;
    var csesWs = req.query.cses;
    var nraWs = req.query.nra;
    var nrpWs = req.query.nrp;
    var tfpWs = req.query.tfp;
    var balanceWs = req.query.balance;
    var fyWs = req.query.fy;
    var thpWs = req.query.thp;

    var queryString = "?fy=" + fyWs + "&age=" + ageWs + "&cses=" + csesWs + "&thp=" + thpWs + "&nrp=" + nrpWs + "&nra=" + nraWs + "&balance=" + balanceWs + "&tfp=" + tfpWs;

    var timeS = new Date;
    var name = timeS.getTime() + "TTR.png";

    function generateImage() {
        webshot('http://180.151.85.194:3001/queryTTR' + queryString, 'uploads/' + name, { shotSize: { width: 630, height: 550 } }, function(err, data) {
            // res.write("error saving");

            if (err) {
                var resErr = new Error("Unable to generate TTR chart");
                resErr.status = 400;
                console.log("error occured", resErr);
                callback(resErr);
            } else {
                var img = fs.readFileSync('uploads/' + name);
                console.log('uploads/' + name);
                fs.unlink('uploads/' + name);
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.end(img, 'binary');
            }


        });
    }

    generateImage();
});
app.get('/queryTTR', function(req, res) {

    res.render(__dirname + '/indexTTR.ejs', {
        ageQ: req.query.age,
        fyQ: req.query.fy,
        csesQ: req.query.cses,
        balanceQ: req.query.balance,
        nraQ: req.query.nra,
        nrpQ: req.query.nrp,
        tfpQ: req.query.tfp,
        thpQ: req.query.thp
    });
});
app.get('/queryRA', function(req, res) {

    var data = postDataRA;
    res.render(__dirname + '/indexRA.ejs', {
        data: data,
    });
});
app.post('/webshotRA', function(req, res, callback) {

    postDataRA = req.body;

    var timeS = new Date;
    var name = timeS.getTime() + "RA.png";

    function generateImage() {
        webshot('http://180.151.85.194:3001/queryRA', 'uploads/' + name, { shotSize: { width: 740, height: "all" } }, function(err, data) {
            // res.write("error saving");

            if (err) {
                var resErr = new Error("Unable to generate Insurance Adequacy chart");
                resErr.status = 400;
                console.log("error occured", resErr);
                callback(resErr);
            } else {
                var img = fs.readFileSync('uploads/' + name);
                console.log('uploads/' + name);
                fs.unlink('uploads/' + name);
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.end(img, 'binary');
            }


        });
    }

    generateImage();
});


function callRequest(data, url, callback) {
    var options = {
        "method": "POST",
        "hostname": "180.151.85.194",
        "port": "3001",
        "path": url,
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache"
        }
    };

    var req = http.request(options, function(result) {
        var chunks = [];

        result.on("data", function(chunk) {
            chunks.push(chunk);
        });

        result.on("end", function() {
            var body1 = Buffer.concat(chunks);
            var timeS = new Date;
            var name = timeS.getTime() + "image.png";
            fs.writeFile('uploads/' + name, body1, 'Base64', function(err) {
                if (err) {
                    console.log('errorrrr.');
                    throw err;
                }
                callback(null, 'uploads/' + name);
            });
        });
    });

    req.write(JSON.stringify(data));
    req.end();
}

function pdfApi(image1, image2, callback) {
    ejs.renderFile(__dirname + '/indexHTP.ejs', { image1: image1, image2: image2 }, {}, function(err, html) {
        if (html) {
            var options = { format: 'Letter', base: 'file://' + __dirname + '/' };

            pdf.create(html, options).toFile('uploads/temper.pdf', function(err, result) {
                if (err) {
                    return console.log(err);
                } else {
                    callback(null, { 'filePath': 'download/' });
                    //fs.unlink('uploads/' + name);
                    // res.status(200).send({ 'filePath': 'download/', 'fileName': res });
                    // res.end();
                }
            });
        } else {
            console.log("no html");
        }
    });
}

app.post('/htmlPDF', function(req, res) {

    var fs = require('fs');
    var http = require("http");
    var imageAPI_array = [];
    var count = 1;
    res.status(200).send({ 'filePath': '/download/temper.pdf', fileName:"temper.pdf" });
    res.end();
});
