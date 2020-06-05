var name = "Radu";
var message = "Hello " + name + "!";
var timeout = 3000;
var isNight = false;
var isMorning = false;
var nothing = null; /*nu trebuie pus neaparat null, aceasta este valoarea standard atribuita atunci cand nu ii dam noi o valoare */

var date = new Date();
var hour = date.getHours();

if(hour >= 19 || hour <=6) {
    alert("Noapte buna!")
    alert("Somn usor!");
} else if(hour <= 11) {
    alert("Buna dimineata!");
} else if(hour <= 17) {
    alert("Buna ziua!");
} else {
    alert("Buna seara!");
}

// if(isNight) {
//     alert("Noapte buna!");
//     alert("Somn usor!");
// } else if(isMorning) {
//     alert("Buna dimineata!");
// } else {
//     alert("Buna ziua!");
// }
setTimeout(sayHello, timeout);
function sayHello() {
    // alert(message);
    console.log(message);
    }
