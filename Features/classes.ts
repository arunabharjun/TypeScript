class Vehicle {
	// FIELDS
	// constructor to initialize the field in first run
	constructor(public color: string) {}

	protected honk(): void {
		console.log('Beep! Beep!');
	}
}

// inheritance with field
class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}

	private drive(): void {
		console.log('Vroommmm Vroommm !');
	}

	startToDrive(): void {
		this.drive();
		this.honk();
	}
}

const car = new Car(4, 'Blue');
car.startToDrive();
console.log(car.wheels);

const vehicle = new Vehicle('White');
console.log(vehicle.color);

// car.honk();
