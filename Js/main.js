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

(function($){


})(jQuery)//End of File
