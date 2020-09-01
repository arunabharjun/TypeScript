class Vehicle {
	// FIELDS
	// constructor to initialize the field in first run
	constructor(public color: string) {}

	protected honk(): void {
		console.log('Beep! Beep!');
	}
}

// inheritance
class Car extends Vehicle {
	private drive(): void {
		console.log('Vroommmm Vroommm !');
	}

	startToDrive(): void {
		this.drive();
		this.honk();
	}
}

const car = new Car('Blue');
car.startToDrive();

const vehicle = new Vehicle('White');
console.log(vehicle.color);

// car.honk();
