var connection = require('./connection.js');



var orm = {
	selectAll: function (cb) {
		var all = 'SELECT * FROM burger';
		connection.query(all, function (err, allresult) {
			if (err) throw err;
			cb(allresult);
		});
	},

	insertOne: function (name, cb) {
		connection.query('INSERT INTO burger SET ?', {
			burger_name: name,
			devoured: false
		}, function(err, res){
			if(err){
				throw err
			}
			cb(res);
		})
	},

	update: function (id, cb) {
		var queryString = 'UPDATE burger SET devoured = true WHERE id ' + id;

		console.log(queryString);

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;

