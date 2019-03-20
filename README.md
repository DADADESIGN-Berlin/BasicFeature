# Basic Feature

## Js/main.js ##

This is how I use **revealing module patterns** to organize and encapsulate my code in all my project.
It makes it very easy to import features from one project to another and it provides easy access to a bunch of global helpers.

I sometimes vary a little bit from common coding style, but I find it very useful to do it like this and encourage all of you to pick up what you like.

( Having VSC and Chrome installed ) Created a batch file in the working folder and name it 'new_feature.bat':
```bash
@ echo off
git clone https://github.com/DADADESIGN-Berlin/basicFeature %1 && code %1 && start chrome %1/index.html
```
Kickstarting a new prototype in a second is nice:

G:/__LABOR>```new_feature MY_NEW_FEATURE```


## Declaring variables:

1.) Whenever it is likely that there will be more than one variable declared, I like to split the var-keyword and the declaration in multiple lines and declare all variables in a list like this:

```javascript
var
str = 'text ',
alt = 'alt text';

str += alt;

console.log(str);
```

**Explanation:**
I find it easier for the eyes to have it all vertical lined up.
 
 
 
 
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

In my daily workflow it is really a huge timesaver to be able to port features quickly. 

```javascript
var SCROLLSMOOTH = (function(){
    var 
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


SCROLLSMOOTH.init();
SCROLLFXINTRO.init();
//PRODUCTCARD.init();

```
For creation it is cool to be able to turn on/off features at on place.
Having the DOM-access always on top makes it easy to adjust the code for other projects. 



```javascript
var FEATURE = (function(){
    var 
    $box = $('#myLongNamedFeatureBox'),
    init = function(){
    
        var 
        instance = new Constructor(5);
        
        $box.html('X is ' + instance.x);// X is 5
        
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


