# New feature

## Js/main.js ##

This is how I use **revealing module patterns** to organize and encapsulate my code in all my projects.
It makes it very easy to import features from other modulare projects and it provides easy access to a bunch of global helpers.

I sometimes vary a little bit from common coding style, but I find it very useful to do it like this and encourage all of you to pick up what you like.



## Declaring variables:

1.) I like to split the var-keyword and the declaration in multiple lines and declare all variables in a list like this:

```javascript
var
str = 'text ',
alt = 'alt text ';

str += alt;

console.log(str)
```

**Explanation:**
I find it easier for the eyes to have it all verical lined up.
 
 
 
 
2.) Accessing the DOM using singlequotes, no spaces and prefix jQuery-objects with $:

```javascript
var
// Access DOM
$some_class = $('.some_class'),
$someId = $('#someId'),
// Do stuff
h = $someId.height();
```

**Explanation:**
The $-prefix signals a jQuery-object, that you can call jQuery-methods on.

When creating DOM objects with jQuery, I find it more consistent to do it with singlequotes cause the html looks right from the start:

```javascript
$div = $('<div class="box"></div>');
```



