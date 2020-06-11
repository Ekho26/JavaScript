alert = function(){
var redPlanet = document.querySelector("#redplanet");
redPlanet.innerHTML = "Aliens approaching!";
redPlanet.style.color = "red";
}
document.querySelector("#redplanet").onclick = alert;