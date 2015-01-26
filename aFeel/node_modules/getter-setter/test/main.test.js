var _    = require('underscore'),
	test = require('tap').test,
	main = require('./../lib/main');

test('main.js exports', function(t) {

	t.ok(_.isFunction(main.extend), 'main.extend exports a function');
	t.ok(_.isFunction(main.node), 'main.node exports a function');
	t.ok(_.isFunction(main.proto), 'main.proto exports a function');
	t.ok(_.isFunction(main.browser), 'main.browser exports a function');
	t.end();
});


var getTest = function (mod) {

	return function (t) {
		var obj = {
			hello: 'world'
		};
		mod(obj);

		t.equal(obj.get('hello'), obj.hello, 'getter works');
		t.end();
	};
};

var setTest = function (mod) {

	return function (t) {
		var obj = {
			hello: 'world'
		},
		expected = 'blah';
		mod(obj);

		t.equal(obj.set('btw', expected), expected, 'setter works');
		t.end();
	};
};

test('decorate.extend: getter works', getTest(main.extend));
test('decorate.proto: getter works', getTest(main.proto));
test('decorate.extend: setter works', setTest(main.extend));
test('decorate.proto: setter works', setTest(main.proto));
test('decorate.browser: getter works', getTest(main.browser));
test('decorate.node: getter works', getTest(main.node));
test('decorate.browser: setter works', setTest(main.browser));
test('decorate.node: setter works', setTest(main.node));