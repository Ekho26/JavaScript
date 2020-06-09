var chevy = {
    make: "Ford",
    model: "Mustang",
    year: 1990,
    color: "red",
    passengers: 4,
    mileage: 2000,
    engineIsOn: false,
    fuel: 50,
    maxFuel: 50,
    mediumConsumption: 7.5,
    refill: function(num) {
        if(this.fuel + num > this.maxFuel) {
            this.fuel = this.maxFuel;
            console.log("Too much!");
        } else {
            this.fuel += num;
        }
    },
    drive: function(distance) {
        if(this.distanceToEmpty() < distance){
            console.log("Too far!");
            distance = this.distanceToEmpty();
        }
        consumption = Math.round(distance * this.mediumConsumption / 100);
        this.fuel -= consumption;
        this.mileage += distance;
    },
    distanceToEmpty: function() {
        return Math.round(this.fuel / this.mediumConsumption * 100);
    },
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
        } else {
            console.log("Car already started");
        }
    },
};
// console.log(chevy.year);
// chevy.mileage = 2500;
// console.log(chevy.mileage);
chevy.start();
chevy.start();

chevy.drive(100);
console.log(chevy.fuel);
chevy.drive(800);
console.log(chevy.fuel);
chevy.refill(30);
console.log(chevy.fuel);

// for(prop in chevy) {
//     console.log(prop + " = " + chevy[prop]);
// }