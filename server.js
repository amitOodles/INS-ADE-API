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


    var timeS = new Date;
    var name = timeS.getTime() + ".png";

    function f1() {
        webshot('http://localhost:3001/query', 'uploads/' + name, webshotOptions, function(err, data) {
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

    f1();

    // res.redirect("/query");
});
