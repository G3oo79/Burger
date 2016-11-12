var connection = require('./connection.js');



var orm = {
	selectAll: function (cb) {
		var all = 'SELECT * FROM burgers';
		connection.query(all, function (err, allresult) {
			if (err) throw err;
			cb(allresult);
		});
	},

	insertOne: function (vals, cb) {
		var insOne = 'INSERT INTO burgers (burger_name) VALUES (" + value +")'; 

		connection.query(insOne, function (err, insresult) {
			if (err) throw err;
			cb(insresult);
		});
	},

	update: function (id, cb) {
		var queryString = 'UPDATE burgers SET devoured = true WHERE id' + id;

		console.log(queryString);

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;

