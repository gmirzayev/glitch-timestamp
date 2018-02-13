// server.js
// where your node app startst

// init project
var express = require('express');
var app = express();
var months = {1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"};

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/fccindex.html');
});

app.get("/:string", (req, res) => {
  var str = req.params.string;
  var unixDate = Date.parse(str);
  var date = new Date(unixDate);
  if(unixDate) { res.send({ "unix": unixDate, "natural": `${months[date.getMonth()+1]} ${date.getDate()}, ${date.getFullYear()}` }) }
  else { res.send({ null: null})}
});

/*
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
*/
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
