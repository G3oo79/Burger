var orm = require('../config/orm.js')

var 

var burgers ={

	selectAll: function (cb) {
		orm.selectAll(function(allresults){
			cb(allresults);
		});
	},

	insOne: function  (name, cb) {
		orm.insOne(name, function(oneresults){
			cb(oneresults);
		});
	},

	update: function (id, cb){
		orm.update(id, function(upresult){
			cb(upresult);
		});
	}
};

module.exports = burger;