var button = document.querySelector("input");
var element = document.getElementById("time");

var showTime = function() { 
    element.innerText = Date();
}
var changeStyle = function() {  
    // element.style.color = "red";
    // Nu este de dorit sa schimbam astfel aspectul
    // paginii noastre
    element.className = "newStyle";
}

// showTime(); 
// button.onclick = showTime;
// button.onclick = changeStyle;
// A 2-a o suprascrie pe prima, de aceea, aceasta
// nu este o varianta tocmai buna

// button.onclick = function(){
//     showTime();
//     changeStyle();
// } Aceasta nu este cea mai buna varianta

button.addEventListener("click", showTime);
button.addEventListener("click", changeStyle);


// button.removeEventListener("click", changeStyle); 
// Asa se elimina un eveniment din button



//  function showTime() {}
// Aceasta este o functie globala

// var showTime = function() {}
// Aceasta este o functie locala, de preferat in momentul 
// in care folosim mai multe framework-uri