# Basic Feature

## Js/main.js ##

This is how I use **revealing module patterns** to organize and encapsulate my code in all my projects with 0% usage of the global namespace.
It makes it very easy to import features from one project to another and it provides easy access to a bunch of global helpers.

I sometimes vary a little bit from common coding style, but I find it very useful to do it like this and encourage all of you to pick up what you like.

Having VSC installed you could create a batch file in your working folder and name it 'create_new_feature.bat':
```bash
@echo off
echo Create a new folder and clone from https://github.com/DADADESIGN-Berlin/basicFeature
SET /p folderName=Name of folder?
git clone https://github.com/DADADESIGN-Berlin/basicFeature %folderName% && code %folderName%
```
Now you can really kickstart new features in a second. Go to your project-folder on the CMD and type:

G:/__LABOR>```cmd create_new_feature ```


## Declaring variables:

1.) I like to split the var-keyword and the declaration in multiple lines and declare all variables in a list like this:

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

I use the 'revealing modulare pattern' for encapsulation most of the times.
I would even encapsulate a constructor in such a pattern. This makes it very easy to reuse features all over your projects.

```javascript
var MODUL = (function(){
    var 
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
    
})()//MODUL

MODUL.init();

```



