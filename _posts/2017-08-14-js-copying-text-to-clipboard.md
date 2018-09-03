---
layout: post
comments: true
title: "[Javascript] Copying text to clipboard"
tags: [programming, javascript, front-end, technology]
img: ['js.png']
cover: 'command-line.jpg'
---

I was looking into ways to copy a given link to the clipboard upon clicking a button. JS has **document.execCommand(‘copy’)** for some operations of the same nature. Turns out this method only allows you to copy text that is currently selected, and you can only select text that’s in either a text input or textarea.

The solution I came up with consists in creating a temporary input in which we could enter the text, execute the copy command and get rid of it right after.

```html
<!-- Button -->

<div id="secretInfo" style="display: none;">secret info to be copied</div>
<button type="button" id="btnCopy">Copy Hidden Info to Clipboard</button>
```

```javascript
// JS function

var $body      = document.getElementsByTagName('body')[0];
var $btnCopy   = document.getElementById('btnCopy');
var secretInfo = document.getElementById('secretInfo').innerHTML;

var copyToClipboard = function(secretInfo) {
  var $tempInput = document.createElement('INPUT');
  $body.appendChild($tempInput);
  $tempInput.setAttribute('value', secretInfo)
  $tempInput.select();
  document.execCommand('copy');
  $body.removeChild($tempInput);
}

$btnCopy.addEventListener('click', function(ev) {
  copyToClipboard(secretInfo);
});
```

[This snippet on Github Gist](https://gist.github.com/anazard/d42354f45e172519c0be3cead34fe869)

PS: the copy buttons are dynamically generated for each row of the datatable I had on that page. This is why this snippet seems to be a bit more complex than what I showed above, but it’s just a matter of removing that logic and adapt to your use-case.
