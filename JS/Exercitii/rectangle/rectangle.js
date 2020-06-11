var rectangle = document.querySelector("div");

var minimize = function(){
    var computedStyle = window.getComputedStyle(rectangle);
    current = computedStyle.height;
    console.log(rectangle.className);
    var n = current.substring(0, current.length -2);
    n = Math.round(n);
    var newHeight = --n + "px";
    rectangle.style.height = newHeight;
    if(n > 0) {
        setTimeout(minimize, 30);
    }
}
minimize();