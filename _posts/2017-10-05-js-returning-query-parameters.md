---
layout: post
comments: true
title: "[Javascript] Returning query parameters"
tags: [programming, javascript, front-end, technology]
img: ['js.png']
cover: 'command-line.png'
---

This function that returns the value of a query parameter or false when it's inexistent.
The trick is to track both starting and ending positions of the desired parameter, so that we're able to split it from the query and return its value.
<!--more-->

```js
function getQueryParam(param) {
  // returns the query parameters portion from the url and gets rid of the ? at position [0]
	var query = window.location.search.substring(1);
	var startPos = query.indexOf(param);
	if (startPos == -1) {
		return false;
	}
	query = query.substring(startPos);

  // checks if the desired param is the last one in the query
	if (query.indexOf('&') > -1) {
		var endPos = (query.indexOf('&', startPos) == -1) ? query.indexOf('&')
																											: query.indexOf('&', startPos);
	}

	var keyValue = query.substring(startPos, endPos);
	return keyValue.split('=')[1];
}
```
[This snippet on Github Gist](https://gist.github.com/anazard/a37b997d0bce174656bda9f6faf7f88f)

And it would be used like this:

```js
// url ~> http://mytestwebsite.com?first=1&second=2
console.log('First parameter: ' + getQueryParam('first'));
// 2
```

This is only of the many ways in which you can implement a similar functionality. Feel free to come up with new ones below!
