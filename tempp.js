app.post('/htmlPDF', function(req, res) {

    var body = req.body;
    var timeS = new Date;
    var name = timeS.getTime() + "HTP.pdf";

    ejs.renderFile(__dirname + '/indexHTP.ejs', { name: body.name }, {}, function(err, html) {
        if (html) {
            var options = { format: 'Letter' };
            pdf.create(html, options).toFile('uploads/' + name, function(err, result) {
                if (err) {
                    return console.log(err);
                } else {
                    //fs.unlink('uploads/' + name);
                    res.status(200).send({ 'filePath':'download/'+ name, 'fileName':name });
                    res.end();
                }
            });
        }
    });
});