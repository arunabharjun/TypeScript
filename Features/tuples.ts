// with object
const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40
};

// with tuple
type Drink = [string, boolean, number];

const pepsi: Drink = [
	'brown',
	true,
	40
];
// pepsi[0] = 40; //not compatible
pepsi[0] = 'clear'; //compatible

const sprite: Drink = [
	'clear',
	true,
	40
];
const tea: Drink = [
	'brown',
	false,
	10
];
