var express = require("express"),
  app = express(),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  path = require('path'),
  server = require('http').createServer(app);

app.use(morgan('dev'));
app.use(bodyParser.json());
//app.use(express.static(__dirname + '/public/'));

app.get("/", function(req, res){
  console.log("hellow");
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});
//require('./configure/middleware.js')(app, express);
app.set('port', (process.env.PORT || 4000));

server.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

module.exports = app;



