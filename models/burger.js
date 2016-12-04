var orm = require('../config/orm.js')

var burgers = {

	selectAll: function (cb) {
		orm.selectAll(function(results){
			cb(results);
		});
	},

	insOne: function  (name, cb) {
		orm.insOne(name, function(results){
			cb(results);
		});
	},

	update: function (id, cb){
		orm.update(id, function(results){
			cb(results);
		});
	}

	
};



module.exports = burgers;
