const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true
};

// without interface
const printVehicle = (vehicle: {
	name: string;
	year: number;
	broken: boolean;
}): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken: ${vehicle.broken}`);
};
printVehicle(oldCivic);

// using interface
interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
}

const printVehicle2 = (vehicle: Vehicle): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken: ${vehicle.broken}`);
};
printVehicle2(oldCivic);
