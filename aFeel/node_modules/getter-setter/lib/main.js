/*jslint nomen: true, plusplus: false, sloppy: true, white:true*/
/*jshint nomen: false, curly: true, plusplus: false, expr:true, undef:true, newcap:true, latedef:true, camelcase:true  */
/*global module: false, iScroll:false, setTimeout: false, document:false, WebKitCSSMatrix:false, _: false, Backbone: false, backbone: false, $: false, define: false, require: false, console: false, window:false */

var _ = require('underscore');
var util = require('util');

var decorateProto = function (obj) {

	obj.__proto__.get = function(arg, val) {
		return (_.has(obj, arg)) ? obj[arg] : false;
	};

	obj.__proto__.set = function(arg, val) {
		return (obj[arg] = val);
	};

	return obj;
};

var decorateExtend = function (obj) {

	var base = {
		get: function(arg, val) {
			return (_.has(this, arg)) ? this[arg] : false;
		}.bind(obj),
		set: function(arg, val) {
			return (this[arg] = val);
		}.bind(obj)
	};

	return _.extend(obj, base);
};


module.exports = {
	proto: decorateProto,
	node: decorateProto,
	browser: decorateExtend,
	extend: decorateExtend
};