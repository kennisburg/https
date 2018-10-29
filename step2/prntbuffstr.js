function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
    
      var https = require('https');                               
  
  
      https.get(requestOptions, function (response) {
  
      response.setEncoding('utf8');

      var body = '';
  
      response.on('data', function (data) {
          body += data;
          console.log(body);
      });
  
      response.on('end', function() {
          console.log('Response stream complete.');
      });
  
      });
  
  }

getAndPrintHTML();