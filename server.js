var express = require('express');
var app = express();
var bodyParser = require('body-parser');
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
});
app.get('/querySSO', function(req, res) {
  var data = {
      "age": 19,
      "cses": 80000,
      "thp": 45000,
      "fy": 2016
  };

    console.log("path:", __dirname);
    res.render(__dirname + '/indexSSO.ejs', {
        data: data,
    });
});
app.get('/webshotSSO', function(req, res, callback) {



    var time = new Date();
    var name = time.getTime() + "IT.png";

    function generateImage() {
        webshot('http://localhost:3001/querySSO', 'uploads/' + name, { shotSize: { width: 740, height: 762 } }, function(err, data) {
            // res.write("error saving");

            if (err) {
                var resErr = new Error("Unable to generate income tax chart");
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

app.get('/query', function(req, res) {


    //var data = postDataIAC;
    var data = {
 "age":50,
 "grossAnnualIncome":120000,
 "funeralCost":20000,
 "familyLivingCostPerYear":90000,
 "hasSpouse":true,
 "hasChildren":true,
 "sickLeaves" : 20,
 "assets" : {
  "homeValue" : 800000,
  "cashAtBank" : 20000,
  "otherInvestment" :20000,
  "superBalance" : 100000
 },
 "existingCovers":{
  "life" : 20000,
  "TPD" : 0,
  "IP" : 0,
  "trauma" : 0
 },
 "assumptions":{
  "inflation" : 2,
  "rateOfReturn" : 5
 },
 "liabilities":{
  "homeMortgage" : 20000,
  "investmentPropertyMortgage" : 10000,
  "creditCardDebt" : 3000,
  "carLoan" : 20000,
  "personalLoan" : 10000,
  "otherLoan" : 0
 },
 "spouseDetails":{
  "age":47,
  "isWorking":true,
  "salary":50000,
  "moveToSmallerProperty":true,
  "valueOfNewProperty" : 500000,
  "moneyToBeBorrowed":400000
 },
 "childrenDetails":{
  "numChildren":0,
  "ages":[3,7],
  "educationExpensePerYearPerChild":2000
 }
};
    res.render(__dirname + '/index_pdf.ejs', {
        data: data,
    });
});
app.post('/webshot', function(req, res, callback) {

    postDataIAC = req.body;


    var timeS = new Date();
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

    //var data = postDataSFC;
    var data = {
        "age": 47,
        "retirementAge": 67,
        "annualSalary": 60000,
        "superBalance": 100000,
        "cc": 10000,
        "ncc": 10000,
        "ecLevel": 9.5,
        "inflation": 2.5,
        "wageIncrease": 3.5,
        "insurancePremiumPerYear": 200,
        "netReturn": 2.90,
        "fundASelectedId": 0,
        "fundNameA": "Special fund 1",
        "contributionFeeA": 1.50,
        "adminFeeA": 100,
        "indirectCostRationA": 1.50,
        "fundBSelectedId": 1,
        "fundNameB": "Special fund 2",
        "contributionFeeB": 1.50,
        "adminFeeB": 100,
        "indirectCostRationB": 1.50,

    };
    res.render(__dirname + '/indexSFC_pdf.ejs', {
        data: data,
    });
});
app.post('/webshotSFC', function(req, res, callback) {

    postDataSFC = req.body;

    var timeS = new Date();
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


    var data = {
        "age": 25,
        "cses": 60000,
        "thp": 37000,
        "fy": 2010,
        "nra": 3,
        "nrp": 3,
        "balance": 50000,
        "tfp": 3

    };

    http: //180.151.85.194:3001/webshotTTR?fy=2010&age=25&cses=60000&thp=37000&nra=3&nrp=3&tfp=3&balance=50000

        queryString = "?fy=" + fyWs + "&age=" + ageWs + "&cses=" + csesWs + "&thp=" + thpWs + "&nrp=" + nrpWs + "&nra=" + nraWs + "&balance=" + balanceWs + "&tfp=" + tfpWs;

    var timeS = new Date();
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

    var data = {
        "age": 46,
        "cses": 80000,
        "thp": 45000,
        "fy": 2016,
        "nra": 6,
        "nrp": 7,
        "balance": 50000,
        "tfp": 2

    };

    res.render(__dirname + '/indexTTR_pdf.ejs', {
        data: data,
    });
});
app.get('/queryRA', function(req, res) {

    // var data = postDataRA;
    var data = {
        "spouseOption": false,
        "houseOption": true,
        "targetIncome": 10000,
        "userDetails": {
            "gender": "male",
            "age": 56,
            "retirementAge": 65,
            "annualSalary": 260000,
            "superBalance": 500000,
            "salarySacrifice": 15384,
            "pensionStartAge": 57
        },
        "userAssumptions": {
            "insurancePremium": 0,
            "investmentReturn": 5.30,
            "variableFee": 1.11,
            "fixedFee": 300,
            "employerContributionLevel": 9.50,
            "inflation": 3.50,
            "wageIncrease": 4.00,
            "pensionDrawdown": 1,
            "pensionDrawdownBase": 40000
        },
        "spouseDetails": {
            "gender": "female",
            "age": 50,
            "retirementAge": 70,
            "annualSalary": 90000,
            "superBalance": 200000,
            "salarySacrifice": 5000,
            "pensionStartAge": 65
        },
        "spouseAssumptions": {
            "insurancePremium": 0,
            "investmentReturn": 5.30,
            "variableFee": 1.11,
            "fixedFee": 300,
            "employerContributionLevel": 9.50,
            "inflation": 3.50,
            "wageIncrease": 4.00,
            "pensionDrawdown": 1,
            "pensionDrawdownBase": 30000
        },
        "otherAssets": {
            "homeContents": 50000,
            "vehicleCost": 0,
            "investmentProperty": 2000,
            "bankAssets": 20000,
            "listedInvestments": 0,
            "marginLoans": 0,
            "otherInvestment": 20000,
            "netRentalIncome": 0,
            "otherIncome": 0,
            "pensionIncome": 0,
            "allocatedPension": 60000
        }
    };
    res.render(__dirname + '/indexRA_pdf.ejs', {
        data: data,
    });
});
app.get('/webshotRA', function(req, res, callback) {

    postDataRA = req.body;
    postDataRA = {
        "spouseOption": false,
        "houseOption": true,
        "targetIncome": 10000,
        "userDetails": {
            "gender": "male",
            "age": 56,
            "retirementAge": 65,
            "annualSalary": 260000,
            "superBalance": 500000,
            "salarySacrifice": 15384,
            "pensionStartAge": 57
        },
        "userAssumptions": {
            "insurancePremium": 0,
            "investmentReturn": 5.30,
            "variableFee": 1.11,
            "fixedFee": 300,
            "employerContributionLevel": 9.50,
            "inflation": 3.50,
            "wageIncrease": 4.00,
            "pensionDrawdown": 1,
            "pensionDrawdownBase": 40000
        },
        "spouseDetails": {
            "gender": "female",
            "age": 50,
            "retirementAge": 70,
            "annualSalary": 90000,
            "superBalance": 200000,
            "salarySacrifice": 5000,
            "pensionStartAge": 65
        },
        "spouseAssumptions": {
            "insurancePremium": 0,
            "investmentReturn": 5.30,
            "variableFee": 1.11,
            "fixedFee": 300,
            "employerContributionLevel": 9.50,
            "inflation": 3.50,
            "wageIncrease": 4.00,
            "pensionDrawdown": 1,
            "pensionDrawdownBase": 30000
        },
        "otherAssets": {
            "homeContents": 50000,
            "vehicleCost": 0,
            "investmentProperty": 2000,
            "bankAssets": 20000,
            "listedInvestments": 0,
            "marginLoans": 0,
            "otherInvestment": 20000,
            "netRentalIncome": 0,
            "otherIncome": 0,
            "pensionIncome": 0,
            "allocatedPension": 60000
        }
    };

    var timeS = new Date;
    var name = timeS.getTime() + "RA.png";

    function generateImage() {
        webshot('http://localhost:3001/queryRA', 'uploads/' + name, { shotSize: { width: 740, height: "all" } }, function(err, data) {
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
app.get('/queryAsset', function(req, res) {

    //var data = postDataAsset;
    var data = {
        "initialInvestmentAmount": 50000,
        "alterOption": true,
        "alterYear": 1,
        "birthYear": 1997 ,
        "birthMonth": 1,
        "birthDay": 1,
        "initial": {
            "australianShares1": 10,
            "internationalShares1": 10,
            "internationalSharesHedged1": 10,
            "usShares1": 10,
            "australianBonds1": 10,
            "internationalBondsHedged1": 10,
            "cash1": 10,
            "australianListedProperty1": 10,
            "internationalListedProperty1": 20
        },
        "altered": {
            "australianShares2": 10,
            "internationalShares2": 10,
            "internationalSharesHedged2": 10,
            "usShares2": 10,
            "australianBonds2": 10,
            "internationalBondsHedged2": 10,
            "cash2": 30,
            "australianListedProperty2": 10,
            "internationalListedProperty2": 0
        }
    };
    res.render(__dirname + '/indexAsset.ejs', {
        data: data,
    });
});
app.get('/webshotAsset', function(req, res, callback) {

    //postDataAsset = req.body;
   /* postDataAsset = {
        "initialInvestmentAmount": 50000,
        "alterOption": true,
        "alterYear": 1,
        "birthYear": 1997,
        "birthMonth": 1,
        "birthDay": 1,
        "initial": {
            "australianShares1": 10,
            "internationalShares1": 10,
            "internationalSharesHedged1": 10,
            "usShares1": 10,
            "australianBonds1": 10,
            "internationalBondsHedged1": 10,
            "cash1": 10,
            "australianListedProperty1": 10,
            "internationalListedProperty1": 20
        },
        "altered": {
            "australianShares2": 10,
            "internationalShares2": 10,
            "internationalSharesHedged2": 10,
            "usShares2": 10,
            "australianBonds2": 10,
            "internationalBondsHedged2": 10,
            "cash2": 30,
            "australianListedProperty2": 10,
            "internationalListedProperty2": 0
        }
    };*/

    var timeS = new Date();
    var name = timeS.getTime() + "Asset.png";

    function generateImage() {
        webshot('http://localhost:3001/queryAsset', 'uploads/' + name, { shotSize: { width: 900, height: "all" } }, function(err, data) {
            // res.write("error saving");

            if (err) {
                var resErr = new Error("Unable to generate asset allocation chart");
                resErr.status = 400;
                console.log("error occured",err ,  resErr);
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
app.get('/queryIT', function(req, res) {
    //var data = postDataIT;
    data = {
        "annualSalary": 60000,
        "paymentFrequency": 1
    };


    res.render(__dirname + '/indexIT_pdf.ejs', {
        data: data,
    });
});
app.get('/webshotIT', function(req, res, callback) {

    postDataIT = req.body;

    /*postDataIT = {
        "annualSalary": 60000,
        "paymentFrequency": 1
    };*/

    var time = new Date();
    var name = time.getTime() + "IT.png";

    function generateImage() {
        webshot('http://localhost:3001/queryIT', 'uploads/' + name, { shotSize: { width: 630, height: 420 } }, function(err, data) {
            // res.write("error saving");

            if (err) {
                var resErr = new Error("Unable to generate income tax chart");
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
app.get('/queryPSF', function(req, res) {

    //var data = postDataPSF;
    var data = {
        "begnYearInvestment": 2017,
        "numChildren": 2,
        "contStartYear": 2017,
        "spState": 0,
        "spPort": 0,
        "firstChild": {
            "c1Name": "Max",
            "schoolId1": true,
            "schoolYear1": 2017,
            "schoolDuration1": 6,
            "major1": 0,
            "studyingOption1": 0
        },
        "secondChild": {
            "c2Name": "Monica",
            "schoolId2": true,
            "schoolYear2": 2017,
            "schoolDuration2": 6,
            "major2": 0,
            "studyingOption2": 0
        },
        "thirdChild": {
            "c3Name": "john",
            "schoolId3": true,
            "schoolYear3": 2017,
            "schoolDuration3": 6,
            "major3": 0,
            "studyingOption3": 0
        },
        "fourthChild": {
            "c4Name": "Rita",
            "schoolId4": true,
            "schoolYear4": 2017,
            "schoolDuration4": 6,
            "major4": 0,
            "studyingOption4": 0
        },
        "fifthChild": {
            "c5Name": "Tom",
            "schoolId5": true,
            "schoolYear5": 2017,
            "schoolDuration5": 6,
            "major5": 0,
            "studyingOption5": 0
        },
        "sixthChild": {
            "c6Name": "Mike",
            "schoolId6": true,
            "schoolYear6": 2017,
            "schoolDuration6": 6,
            "major6": 0,
            "studyingOption6": 0
        }
    };
    res.render(__dirname + '/indexPSF.ejs', {
        data: data,
    });
});
app.post('/webshotPSF', function(req, res, callback) {

    postDataPSF = req.body;

    var timeS = new Date;
    var name = timeS.getTime() + "PSF.png";

    function generateImage() {
        webshot('http://180.151.85.194:3001/queryAsset', 'uploads/' + name, { shotSize: { width: 630, height: 520 } }, function(err, data) {
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
function callRequest(data, url, callback) {
    var options = {
        "method": "POST",
        "hostname": "localhost",
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


function generatePdf(callback) {
    ejs.renderFile(__dirname + '/indexHTP.ejs', {}, {}, function(err, html) {

        if (html) {
            var options = { height: '827px', width: '1169px'};

            var pdfFileName = (new Date()).getTime() + "HTP.pdf";

            pdf.create(html, options).toFile('uploads/' + pdfFileName, function(err, result) {
                if (err) {
                    return console.log(err);
                } else {
                    callback(null, { 'filePath': 'http://180.151.85.194:3001/download/' + pdfFileName, 'fileName': pdfFileName });
                }
            });
        } else {

            console.log("no html",err);
        }
    });
}
app.get('/htmlPDF', function(req, res) {



    async.auto({
        pdf: function(callback) {
            generatePdf(callback);
        }
    }, function(err, results) {
        if (err) {
            res.status(400).send(err);
            res.end();
        } else {
            res.status(200).send(results.pdf);
            res.end();
        }
    });
});
