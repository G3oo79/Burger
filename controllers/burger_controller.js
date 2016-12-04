var express = require('express');

var router = express.Router();

var importburger = require('../models/burger.js');

router.get('/', function (req, res) {
		res.redirect('/index');
});

router.get('/index', function (req, res){
	importburger.selectAll(function (data) {
		var object = {burgers: data};
		res.render('index', object);
	})
});

router.post('/index/create', function (req, res) {
	burger.insert(req.body, function() {
		res.redirect('/index');
	})
});

router.put('/index/update/:id', function (req, res) {
	burgers.update(req.params.id, function() {
		res.redirect('/index');
	})
});


module.exports = router;