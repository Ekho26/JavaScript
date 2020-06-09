var chevy = {
    make: "Ford",
    model: "Mustang",
    year: 1990,
    color: "red",
    passengers: 4,
    mileage: 2000,
    engineIsOn: false,
    stop: function() {
        if(this.engineIsOn) { 
            console.log("Car stopped");
            this.engineIsOn = false;
        } else {
            console.log("Car is already stopped");
        }
        
    },
    start: function() {
        if(!this.engineIsOn) {
            console.log("Car started");
            this.engineIsOn = true;
        } else{
            console.log("Car already started");
        }
    },
};
console.log(chevy.year);
chevy.mileage = 2500;
console.log(chevy.mileage);
chevy.start();
chevy.start();