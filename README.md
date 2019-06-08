# Basic Feature

## Js/main.js ##

This is how I use **revealing module patterns** to organize and encapsulate the JavaScript-code in my projects.
It makes it very easy to export features to other projects and it provides easy access to a bunch of global helpers.

( Having VSC and Chrome installed ) Create a batch file in your working folder and name it 'new_feature.bat':
```bash
@ echo off
git clone https://github.com/DADADESIGN-Berlin/BasicFeature %1 && code %1 && start chrome %1/index.html
```
Kickstarting a new feature in a second is nice:

G:/__LABOR>```new_feature MY_NEW_FEATURE```


## Declaring variables:

1.) I declare all variables on top of a function, as a comma-seperated list. At the bottom of the list I always add a vertical space to indicate the end of the declaration. 
```javascript
var
str = 'text ',
alt = 'alt text';

str += alt;

console.log(str);
```

**Explanation:**
Less code. Quicker introduction to new variables. Better indentation.
 
 
 
 
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

DOM-access always on top makes features easier portable/adaptable. 
Initiating all features at on place - easy debugging.

```javascript
var SCROLLSMOOTH = (function(){
    var
    $scrollContainer = $('#scrollContainer'),
    init = function(){
        ...
    }    
    
    return {
        init: init
    }    

}()//SCROLLSMOOTH

var SCROLLFXINTRO= (function(){

...

}()//SCROLLFXINTRO

var PRODUCTCARD = (function(){

...

}()//PRODUCTCARD


////Initiation////

SCROLLSMOOTH.init();
SCROLLFXINTRO.init();
//PRODUCTCARD.init();

```


## Empty Basic Feature

```javascript
//Empty Feature Modul

var FEATURE01 = (function (m) {
    for( g in m ){ this[g] = m[g] }

    var
    init = function(){
        some()
    },
    some = function(){
        
    }

    return{
        init: init
    }

})(MAIN)//FEATURE01

FEATURE01.init();

```
