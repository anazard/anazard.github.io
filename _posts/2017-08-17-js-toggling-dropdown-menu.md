---
layout: post
comments: true
title: "[Javascript] Toggling dropdown menu"
tags: [programming, javascript, front-end, technology]
img: ['js.png']
cover: 'command-line.jpg'
---

I came across a very interesting and common situation in which I had to toggle displaying a dropdown div upon clicking on a firing button. If the target of the click was any other element in the screen, the dropdown menu had to be closed.

```html
<button id="notificationBtn">Menu</button>

<div id="notificationBox" style="display: none;">
  <ul>
    <li>...</li>
    <li>...</li>
    <li>...</li>
  </ul>
</div>
```

The first step to deal with the case is adding an event listener responsible for switching the dropdown display to none to the body of the document.

Now we add the event listener to the menu button, which will toggle the display depending on the current state of the menu div AND stop the propagation of the event, not letting it reach the listener in the body of the document.

```javascript
document.addEventListener('DOMContentLoaded', function() {
  var notificationBtn = document.getElementById('notificationBtn');
  var notificationBox = document.getElementById('notificationBox');

  document.body.addEventListener('click', function(ev) {
    notificationBox.style.display = 'none';
  });

  notificationBtn.addEventListener('click', function(ev) {
    ev.stopPropagation();
    notificationBox.style.display = notificationBox.style.display == 'none' ? 'block' : 'none';
  });
});
```

[This snippet on Github Gist](https://gist.github.com/anazard/3270023f25e54a6e491b071daec98377)
