/*
// main.js
// This code is free to use or distribute.
// Copyright (C) 2018-2019 by Christian Schoepp
*/
var MAIN = (function() {
    // Main project module 'MAIN'
    // provides basic helper
    // methods and variables

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



var FEATURE = (function (m) {
    // Quick import all from MAIN
    for( g in m ){ this[g] = m[g] }

    var
    init = function(){
        show()
    },
    show = function(){
        var
        output = '';
        // Now you can locally access
        // all the MAIN methods and
        // write clean readable code, see:
        loop(10, function(i){
            output +=
            '<p>' + i + ': ' + rand( 50, 100, true) + '</p>'
        })

        $body.prepend( output )

    }

    return{
        init: init
    }

})(MAIN)//FEATURE
FEATURE.init()


var SCROLLCOLOR = (function (m) {
    // Import all from MAIN
    for( g in m ) { this[g]  = m[g] }

    var
    $card = $('.card'),
    init = function () {
        $(window).scroll(scroller);
    },
    scroller = function(){

        info( scrollPosition() );
        info( rand(0,10,true) );

        var
        quo = function(a){
            return (
                Math.floor( scrollPosition() / a ) % 255
            )
        }

        $body.css({
            'background':'rgb('+quo(3) +','+
                                quo(4) +','+
                                quo(10) +')'
        });

        $card.each(function(i){
            $(this).css({
            'background':'rgb('+quo((10/i)) +','+
                                quo((40/i)) +','+
                                quo((2/i)) +')'
            })
        })

    }

    return{
        init: init
    }

})(MAIN);// SCROLLCOLOR


var POINTERCOLOR = (function (m) {
    // Import all from MAIN
    for(g in m){
       this[g] = m[g]
    }

    var
    $card = $('.card'),
    init = function () {
        $(window).mousemove(function(e){

            info( 'X: '+e.pageX );
            info( 'Y: '+e.pageY );

            var
            quo = function(a){
                return (
                 Math.sin( (e.pageX/1000) * (e.pageY/100) )
                )
            };

            $body.css({
                'opacity': quo(10)
            })
            $card.each(function(i){
                $(this).css({
                'opacity': quo(20)
            })

        })

    })
    }

    return {
        init: init
    }


})(MAIN);

// It's nice to be able
// to turn on/off the features
// at one place
SCROLLCOLOR.init()
POINTERCOLOR.init();
