//[[[[[[[[[[[[[[Npm packages, modules]]]]]]]]]]]]]]
/////////////////////////////////////////////////////
var express = require("express");
var methodOver = require("method-override");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3030;


app.use(express.static(process.cwd() + '/public'));

var jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({
	extended: false

}));

app.use(methodOver('_method'));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs ({
	defaultLayout: 'main'

}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

app.listen(port, function () {
	console.log('listening on PORT ' + port);
});


