const carMakers: string[] = [
	'bmw',
	'toyota',
	'chevy'
];

const dates = [
	new Date(),
	new Date()
];

// two dim array
const carsByMake: string[][] = [];

// help with inference when extracting values
const a_car_maker = carMakers[0];
const myCar = carMakers.pop();

// preventing incompatible values
// carMakers.push(100); //this is incompatible
carMakers.push('hyundai');

// help with map
carMakers.map((car: string): string => {
	return car.toUpperCase();
});

// flexible types
const impDates: (Date | string)[] = [
	new Date(),
	'06-08-1996'
];

impDates.push(new Date());
impDates.push('06-08-1997');
// impDates.push(1234); //incompatible
