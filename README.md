# BasicProject

This is how I use **revealing modulare patterns** to organize and encapsulate my code in all my projects.
It makes it easy to import features from other projects and it provides easy access to global helpers.
I sometimes vary a little bit from common coding style, but I find it very useful to do it like this and encourage all of you to pick up what you like.



## Declaring variables:

1.) I like to split the var-keyword and the declaration in multiple lines and declare all variables as a list like this:

```javascript
var
str = 'text ',
alt = 'alt text ';

str += alt;

console.log(str)
```

**Explanation:**
I find it easier for the eyes to have it all verical lined up.
 
 
 
 
2.) Accessing the DOM like this, using singlequotes and no spaces:

```javascript
var
// Access DOM
$some_class = $('.some_class'),
$someId = $('#someId'),
// Do stuff
h = $someId.height();
```

**Explanation:**
The $ signals jQuery-objects, that you can call jQuery-methods on.
When creating DOM objects with jQuery, it is more consistent to do it like so. See, the html looks right from the start:

```javascript
$div = $('<div class="box"></div>');
```



