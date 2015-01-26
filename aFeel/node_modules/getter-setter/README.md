# getter-setter

[![Build Status](https://secure.travis-ci.org/techjacker/getter-setter.png)](http://travis-ci.org/techjacker/getter-setter)

### Install
```Shell
npm install getter-setter
```

### 2 methods for decorating objects with getters and setters:
1. .node(obj)
__proto__ method only works in node.js or v8 browsers such as chrome

	```JavaScript
	var obj = require('getter-setter').node({hello: 'world'});
	obj.get('hello');
	```

2. .browser(obj)
underscore extend method (works in all browsers as well as node.js)

	```JavaScript
	var obj = require('getter-setter').browser({hello: 'world'});
	obj.get('hello');
	```


## Full Example

```JavaScript
var decorate = require('getter-setter').browser,
	obj = decorate({
		hello: 'world'
	});

// outputs "world"
console.log(obj.get('hello'));

// outputs "bye"
console.log(obj.set('hello', 'bye'));
console.log(obj.get('hello'));
```