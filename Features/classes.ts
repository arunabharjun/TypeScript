class Vehicle {
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

const car = new Car();
car.startToDrive();
// car.honk();
