class Vehicle {
	constructor(make, model, year, color, mileage) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.color = color;
		this.passenger = 0;
		this.speed = 0;
		this.mileage = mileage;
		this.started = false;
		this.numberOfWheels = 0;
	}

	start() {
		if (this.fuel > 0) {
			console.log("engine started...!!!");
			return (this.started = true);
		} else {
			console.log("engine cannot start...");
			return (this.started = false);
		}
	}
	accelerate() {
		if (this.started) {
			if (this.fuel > 0) {
				console.log((this.speed += 1));
				this.fuel = this.fuel - 1;
			} else {
				console.log("out of fuel.");
				this.stop();
			}
		} else {
			alert("You need to start the engine first.");
		}
	}
	decelerate() {
		if (this.started) {
			if (this.fuel > 0) {
				if (this.speed > 0) {
					console.log((this.speed -= 1));
					this.fuel = this.fuel - 1;
				} else {
					console.log(this + " has stopped moving");
					this.fuel = this.fuel - 1;
				}
			} else {
				console.log("out of fuel.");
				this.stop();
			}
		} else {
			console.log("You need to start the engine first.");
		}
	}
	stop() {
		console.log("engine off")
		this.started = false;
	}

	//optional methods to code for the Vehicle base class

	drive() {
		accelerate();
	}
	brake() {
		decelerate();
	}

	autoPark() {}

	autoDrive() {}

	typeOfVehicle(wheels) {
		if (this.numberOfWheels == 8 && 8 == wheels) {
			console.log(this.model + " " + this.make + " is a Truck");
		} else if (this.numberOfWheels == 4 && 4 == wheels) {
			console.log(this.model + " " + this.make + " is a CAr");
		} else if (this.numberOfWheels == 2 && 2 == wheels) {
			console.log(this.model + " " + this.make + " is a Bike");
		} else {
			console.log("Unknown type of vehicle");
		}
	}
}

//Code the Car subclass here, i.e. class Car extends Vehicle ...

class car extends Vehicle {
	constructor (make, model, year, color, mileage){
			super(make,model,year,color,mileage);
			this.maxPassengers = 5;
			this.Passengers = 0;
			this.numberOfWheels = 4;
			this.maxSpeed = 160;
			this.fuel = 10;
			this.scheduleService = false
}

scheduleService(){
		if (this.mileage > 30000) {
			this.scheduleService = true
			return this.scheduleService;
	}
}
loadPassenger(num) {
	if (this.passenger < this.maxPassengers) {
			if ((num + this.passenger) <= this.maxPassengers) {
					this.passenger = num;
					return this.passenger;
			} else {
					console.log(this.model + " " + this.make + " not have enough space to take all passengers.");

			}
	} else {
			console.log(this.model + " " + this.make + "car is full");
	}
}
}

console.log(myCar.loadPassenger(5))
console.log(myCar.scheduleService())
console.log(myCar.start())
console.log(myCar.accelerate())
console.log(myCar.stop())
console.log(myCar)





//Creating Instances and Testing Them


//This is an instance of the Vehicle class. You can use it to test your code for the Vehicle class.

let v = new Vehicle("Mercury", "Sedan", "1965", "color", "mileage");

console.log(v.make);

//You can use the same instance "v" of the Vehicle class and dot notation to add properties of the Car class to it, but you should also create at least one totally new instance with just the Car class and test it out with Vehicle and Car methods (such as with v.make shown above).


//Create at least two new instances of the Car class and test them here:












//Bonus (optional of course)

//Code the Truck subclass of Vehicle here
