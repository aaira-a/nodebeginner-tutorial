
var sleep = require("sleep-async")();

function start(response){
    console.log("Request handler 'start' was called.");

    sleep.sleep(10000, function(){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello Start");
        response.end();       
    });

};

function upload(response){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
};

exports.start = start;
exports.upload = upload;
