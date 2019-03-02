(function(){
/*
// main.js
// This code is free to use or distribute.
// Copyright (C) 2018-2019 by Christian Schoepp
*/

// Polyfill the window objects
// 'requestAnimationFrame' and
// 'cancelAnimationFrame'

var animationFrameTimeout;
var requestAnimationFrame =
window.requestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function( callback ){
    animationFrameTimeout =
    window.setTimeout(callback, 1000 / 60);
};
window.requestAnimationFrame = requestAnimationFrame;
var cancelAnimationFrame =
window.cancelAnimationFrame ||
window.mozCancelAnimationFrame ||
clearTimeout(animationFrameTimeout);
window.cancelAnimationFrame = cancelAnimationFrame;

var MAIN = (function() {

    // Main project module
    // provides helper methods
    // and project globals

    // Project globals
    var
    $body = $('body'),
    is_desktop,
    scrollPosition,
    windowHeight,
    windowWidth,
    init = function() {
        scrollPosition = $(document).scrollTop();
        windowHeight = $(window).height();
        windowWidth = $(window).width();
        is_desktop = ($(window).outerWidth()<=768) ? false : true;
        $(window).scroll(scroller);
        $(window).resize(resizer);
    },
    // Helper methods
    info = function(a){
        console.log(a)
    },
    rand = function(a,b,c){
        a = ( ( Math.random() * (b-a) ) + a );
        a = c ? Math.floor(a) : a;
        return a
    },
    loop = function(num,callback){
        var n = num;
        for( var i = 0; i < n; i++ ){
            callback(i)
        }
    },
    scroller = function(){
        scrollPosition = $(document).scrollTop();
    },
    resizer = function(){
        windowHeight = $(window).height();
        is_desktop = ($(window).outerWidth()<=768) ? false : true;
    }

    init()

    // Export all
    return {
        info: info,
        rand: rand,
        loop: loop,
        $body: $body,
        scrollPosition: function(){return scrollPosition},
        windowHeight: function(){return windowHeight},
        windowWidth: function(){return windowWidth},
        is_desktop: function(){return is_desktop}
    }

})();//MAIN

var FEATURE01 = (function (m) {
    // Quick import all from MAIN
    for( g in m ){ this[g] = m[g] }

    var
    init = function(){
        some()
    },
    some = function(){
        // Do stuff, write easy
        loop(5,function(i){
            info(i)
        })
    }

    return{
        init: init
    }

})(MAIN)//FEATURE01

FEATURE01.init();

})()//End of File
