# Basic Feature

## Js/main.js ##

This is how I use **revealing module patterns** to organize and encapsulate my code in all my projects with 0% usage of the global namespace.
It makes it very easy to import features from one project to another and it provides easy access to a bunch of global helpers.

I sometimes vary a little bit from common coding style, but I find it very useful to do it like this and encourage all of you to pick up what you like.

I created a batch file in my working folder and named it 'create_feature.bat':
```bash
@ echo off
git clone https://github.com/DADADESIGN-Berlin/basicFeature %1 && code %1
```
Kickstarting a new prototype in a second is nice:

G:/__LABOR>```create_feature MY_NEW_FEATURE```


## Declaring variables:

1.) Whenever it is likely that there will be more then one variable declared, I like to split the var-keyword and the declaration in multiple lines and declare all variables in a list like this:

```javascript
var
str = 'text ',
alt = 'alt text ';

str += alt;

console.log(str);
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

I use the **'revealing module pattern'** for encapsulation most of the times.
I would even encapsulate a constructor in this pattern. 

```javascript
var FEATURE = (function(){
    var 
    $myBox = $('#myBox'),
    init = function(){
    
        var 
        instance = new Constructor(5);
        
        console.log(instance.x);// 5
        
    },
    Constructor = function(a){
        this.x = a;
    }
    
    
    return {
        init: init
    }
    
})()//FEATURE

FEATURE.init();

```
In my daily workflow it is really a huge timesaver to be able to port features quickly. I always encapsulate pieces that would be nice to have in other projects. Having the DOM-access strictly on top of the modules makes it easy to adjust the code. 


