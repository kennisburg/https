var myfuncs = require('./5https-function');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

myfuncs.getHTML(requestOptions, myfuncs.printHTML);

