module.exports = {getHTML:
    function getHTML (options, callback) {
        var https = require('https');                               
    
    
        https.get(options, function(response) {
    
        response.setEncoding('utf8');
  
        var body = '';
    
        response.on('data', function(data) {
            body += data;
            callback(body);
        });
    
        response.on('end', function() {
            console.log('Response stream complete.');
        });
    
        });
    }, 

    printHTML: function printHTML(html) {
        console.log(html);
    }
}

