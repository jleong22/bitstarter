var express = require('express');
var app = express();
app.use(express.logger());

fs.readFileSync('bitstarter/index.html', 'utf8');

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
