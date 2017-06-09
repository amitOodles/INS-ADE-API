function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.responseType = 'arraybuffer';
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var blob = xmlHttp.response;
            if (callback) {
                callback(blob);
            }
        }
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}


httpGetAsync("http://180.151.85.194:3000/webshot?fy=2010&age=25&cses=60000&thp=37000", function(blob) {
    var str = "data:image/png;base64," + _arrayBufferToBase64(blob) + "";
    console.log("str:", str);
    PdfMaker.createChart($scope.personalDetails, Number($scope.annualSalary.replaceAll('$', '').replaceAll(',', '')), $scope.result, str);

});





/////////////////////////////////////////////////////////////////////////////////



var str1 = btoa(String.fromCharCode.apply(null, new Uint8Array(blob)));
var str = "data:image/png;base64," + str1 + "";
