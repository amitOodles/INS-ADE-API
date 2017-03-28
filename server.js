const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var pdf = require('html-pdf');
var fs = require('fs');
var webshot = require('webshot');
var async = require('async');
var http = require("http");
var ejs = require('ejs');
var cors = require('cors');
app.use(cors());

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

function generatePdf(image1, image2, callback) {
    ejs.renderFile(__dirname + '/indexHTP.ejs', { image1: image1, image2: image2 }, {}, function(err, html) {
        if (html) {
            var options = { format: 'Letter', base: 'file://' + __dirname + '/' };

            var pdfFileName = (new Date()).getTime() + "HTP.pdf";

            pdf.create(html, options).toFile('uploads/'+pdfFileName , function(err, result) {
                if (err) {
                    return console.log(err);
                } else {
                    callback(null, { 'filePath': 'http://180.151.85.194:3001/download/'+pdfFileName ,'fileName': pdfFileName });
                }
            });
        } else {
            console.log("no html");
        }
    });
}

app.post('/htmlPDF', function(req, res) {



    async.auto({
        webshot: function(callback) {
            var data = {
                "age": 50,
                "grossAnnualIncome": 120000,
                "funeralCost": 20000,
                "familyLivingCostPerYear": 90000,
                "hasSpouse": true,
                "hasChildren": true,
                "sickLeaves": 20,
                "assets": {
                    "homeValue": 800000,
                    "cashAtBank": 20000,
                    "otherInvestment": 20000,
                    "superBalance": 100000
                },
                "existingCovers": {
                    "life": 20000,
                    "TPD": 0,
                    "IP": 0,
                    "trauma": 0
                },
                "assumptions": {
                    "inflation": 2,
                    "rateOfReturn": 5
                },
                "liabilities": {
                    "homeMortgage": 20000,
                    "investmentPropertyMortgage": 10000,
                    "creditCardDebt": 3000,
                    "carLoan": 20000,
                    "personalLoan": 10000,
                    "otherLoan": 0
                },
                "spouseDetails": {
                    "age": 47,
                    "isWorking": true,
                    "salary": 50000,
                    "moveToSmallerProperty": true,
                    "valueOfNewProperty": 500000,
                    "moneyToBeBorrowed": 400000
                },
                "childrenDetails": {
                    "numChildren": 0,
                    "ages": [3, 7],
                    "educationExpensePerYearPerChild": 2000
                }
            };
            callRequest(data, "/webshot", callback);
        },
        webshotSFC: function(callback) {
            var data = {
                "age": 47,
                "retirementAge": 67,
                "annualSalary": 80000,
                "superBalance": 100000,
                "cc": 10000,
                "ncc": 10000,
                "ecLevel": 9.5,
                "inflation": 2.5,
                "wageIncrease": 3.5,
                "insurancePremiumPerYear": 200,
                "netReturnRate": 1.50,
                "fundIndexA": 0,
                "fundIndexB": 1,
                "specifiedFundA": false,
                "specifiedNameA": "a",
                "specifiedFeeA": 1.50,
                "specifiedFundB": false,
                "specifiedNameB": "b",
                "specifiedFeeB": 1.90
            };
            callRequest(data, "/webshotSFC", callback);
        },
        pdf: ['webshot', 'webshotSFC', function(results, callback) {
            generatePdf(results.webshot, results.webshotSFC, callback);
        }]
    }, function(err, results) {
        if(err){
            res.status(400).send(err);
            res.end();
        }else{
            res.status(200).send(results.pdf);
            res.end();
        }
    });
});
