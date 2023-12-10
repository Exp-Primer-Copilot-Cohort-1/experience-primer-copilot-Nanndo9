// Create web server

var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/html
    response.writeHead(200, { 'Content-Type': 'text/html' });
    // Read the file content
    fs.readFile('index.html', function (err, data) {
        if (err) {
            response.writeHead(404);
            response.write('File not found');
        } else {
            // Write the content of the file to response body
            response.write(data.toString());
        }
        // Send the response body
        response.end();
    });
});

// Listen on port 8080
server.listen(8080);
// Console will print the message
console.log('Server running at http:')
