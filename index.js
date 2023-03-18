var express = require('express');
var app = express();
const port = process.env.PORT || 3000;

//cau hinh handlebars
var expressHBS = require('express-handlebars');

app.engine('.hbs', expressHBS.engine({ extname: "hbs", defaultLayout: 'index', layoutsDir: "views/" }));

app.engine('.hbs', expressHBS.engine({ extname: "hbs", defaultLayout: '', layoutsDir: "views/" }));

app.set('view engine', '.hbs');
app.set('views', 'views');

app.get('/', function(req, res) {
  res.send("Hello World");
});

// dua layout vao day
app.get('/handlebars', function(req, res) {
  res.render('index');
  console.log("1");
});
app.get('/baitap', function(req, res) {
  res.render('baitap');
  console.log("2");
});
app.listen(port, () => {
  console.log("Server dang chay cong: " + port);
});