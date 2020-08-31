interface HasInfo {
	summary(): string;
}
const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	}
};

const coldDrink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return this.color;
	}
};

const printInfo = (item: HasInfo): void => {
	console.log(item.summary());
};
printInfo(oldCivic);
printInfo(coldDrink);
