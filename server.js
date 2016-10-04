const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var fs = require('fs');

var webshot = require('webshot');

// app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use("/css", express.static(__dirname + '/css'));

app.use("/js", express.static(__dirname + '/js'));

app.use("/images", express.static(__dirname + '/images'));

app.use("/fonts", express.static(__dirname + '/fonts'));

app.set('view engine','ejs');

var webshotOptions = {
  // screenSize: {
  //   width: 768
  // , height: 2010
  // },
	shotSize: {
    width:900
  , height: "all"
  }
};

app.listen(3001, function() {
    console.log('listening on 3001');
})


// app.get('/file', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
//     // res.send(data);
//     // res.sendFile(__dirname + '/index.html');    
//     // res.sendFile(path.join(__dirname + '/views/index.html'));
// });

app.get('/query', function(req, res) {

    var data = postData;

    res.render(__dirname + '/index.ejs', {
        data : data,
    });

});


app.post('/webshot', function(req, res, callback){

    postData = req.body;
    // console.log(postData);

//      postData = {
// 	"age":50,
// 	"grossAnnualIncome":120000,
// 	"funeralCost":20000,
// 	"familyLivingCostPerYear":90000,
// 	"hasSpouse":true,
// 	"hasChildren":true,
// 	"sickLeaves" : 20,
// 	"assets" : {
// 		"homeValue" : 800000,
// 		"cashAtBank" : 20000,
// 		"otherInvestment" :20000,
// 		"superBalance" : 100000
// 	},
// 	"existingCovers":{
// 		"life" : 20000,
// 		"TPD" : 0,
// 		"IP" : 0,
// 		"trauma" : 0
// 	},
// 	"assumptions":{
// 		"inflation" : 2,
// 		"rateOfReturn" : 5
// 	},
// 	"liabilities":{
// 		"homeMortgage" : 20000,
// 		"investmentPropertyMortgage" : 10000,
// 		"creditCardDebt" : 3000,
// 		"carLoan" : 20000,
// 		"personalLoan" : 10000,
// 		"otherLoan" : 0
// 	},
// 	"spouseDetails":{
// 		"age":47,
// 		"isWorking":true,
// 		"salary":50000,
// 		"moveToSmallerProperty":true,
// 		"valueOfNewProperty" : 500000,
// 		"moneyToBeBorrowed":400000
// 	},
// 	"childrenDetails":{
// 		"numChildren":2,
// 		"ages":[3,7],
// 		"educationExpensePerYearPerChild":2000
// 	}
// };
    // console.log("server",postData);

    var timeS = new Date;
    var name = timeS.getTime() + ".png";

    function f1() {
        webshot('http://localhost:3001/query', 'uploads/' + name, webshotOptions, function(err, data) {
            // res.write("error saving");

            if (err) {
                var resErr = new Error("Unable to generate SSO chart");
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

    f1();

    // res.redirect("/query");
});
