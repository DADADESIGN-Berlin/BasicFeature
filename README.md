# Basic Feature

## Js/main.js ##

This is how I use **revealing module patterns** to organize and encapsulate my code in all my projects with 0% usage of the global namespace.
It makes it very easy to import features from one project to another and it provides easy access to a bunch of global helpers.

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

## Encapsulating code:

I use the 'revealing modulare pattern' for encapsulation most of the times.
I would even encapsulate a contructor in such a pattern.
It makes it easy to turn on/off the feature, which is nice for debugging and it makes it easy portable in minutes to another project.

```javascript
var MODUL = (function(){
    var 
    init = function(){
    
        var 
        instance = new Contructor()    
        
    },
    Constructor = function(a){
        this.x = a
    }
    
    
    return {
        init: init
    }
    
})()
```

**Explanation:**




