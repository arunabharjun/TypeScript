const add = (a: number, b: number): number => {
	return a + b;
};

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function(a: number, b: number): number {
	return a * b;
};

const logger = (message: string): void => {
	console.log(message);
	// return null;
	// return undefined;
};

const throwError = (message: string): never => {
	throw new Error(message);
	// the end of this function is never reached
	// so we used never as the return type
	// as it never returns anything
};
