class Vehicle {
	drive(): void {
		console.log('Vroooommmm !');
	}

	honk(): void {
		console.log('Beep! Beep!');
	}
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
