---
layout: post
comments: true
title: "[PHP] Slicing Eloquent collections"
tags: [programming, back-end, laravel, php, eloquent, technology]
img: ['laravel.png']
cover: 'command-line.png'
---

Have you ever come across a situation in which you need to iterate through the same array many times, getting where it left off in the last one?
<!--more-->
In my case, I had a db query returning an Eloquent collection, but the way each one would be displayed in the grid changed from the 4th index.
The first 4 items were supposed to be wrapped by a div at each iteraction, while the others should all be in the same div.

In this case, the method Slice from Eloquent collections allows you to use foreach in Blade templates without necessarily having to different arrays to achieve the desired behaviour.

Slice takes two parameters: the starting point (mandatory) and the amount of elements it should return (if omitted, returns the elements from the starting point up to the end of the array).

```html
<!-- Half a row of items in two lines (displays first 4 elements) -->
<div class="side-grid">
    @foreach ($myCollection->slice(0, 4) as $item)
        <div class="col-3">
            @include('partials.itemTemplate', ['item' => $item])
        </div>
    @endforeach
</div>

<!-- Entire row of items (displays the next 4 elements) -->
<div class="row-grid">
    @foreach ($myCollection->slice(4, 4) as $item)
        <div class="col-3">
            @include('partials.itemTemplate', ['item' => $item])
        </div>
    @endforeach
</div>
}
```

There are some other handy methods that may be used with collections. Refer to these on [the official documentation](https://laravel.com/docs/5.2/collections#method-slice).
