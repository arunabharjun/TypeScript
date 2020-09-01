# ⬇️ Installing TypeScript

---

1. Use the following cmd in your terminal window (might need **sudo** prefix)

```bash
npm install -g typescript ts-node
```

2. Use the following command to check status

```bash
tsc --help
```

---

# ▶️ Executing TS code

---

## A. By Compiling and then executing using node

1. Compile the TS code using the following cmd in the TS file directory

```bash
tsc <fine_name>.ts
```

2. Run using node

```bash
node <file_name>.js
```

## B. By using the ts-node NPM module

1. Use the following cmd to compile and run the TS code in one go

```bash
ts-node <file_name>.ts
```

This doesn't create a new JS file from this TS file. Simply compiles it and executes to show the output.

---

# 🍿 Intro: TS in action

---

## A. Using Interface

1. We use something called an **INTERFACE** to define what all properties is a thing going to have. Example -

```tsx
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
```

2. Then we link it up with a variable with the **as** clause. Example - 

```tsx
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const data = {
    id: 1,
    title: "This is a title",
    completed : false
}

const task = data as Todo;
```

## B. Using inline type notation

Example

```tsx
const logTodo = (id: number, title: string, comple: boolean) => {
    console.log(`
        ID : ${id}
        Title : ${title}
        Status : ${comple}
    `);
};
```

---

# 🥞 Types in TypeScript

---

Easy way to refer to the different properties + functions that a value has.
There are two kind of types -
1. **Primitive Types**
2. **Object Types**

## Primitive types

1. **String** | "Hi There"
2. **Number** | 0.00025 | -22 | 600000
3. **Boolean** | true | false
4. **Date** | new Date()
5. **User Defined** Types | Like we defined Todo in previous section
6. **Void**
7. **Undefined**
8. **Null**
9. **Symbol**
10. **Never**

## Object Types

1. **Function**
2. **Arrays**
3. **Classes**
4. **Objects**
5. **Tuples**

---

# 🎯 Annotations in TS

---

Code we add to tell Typescript what type of value a variable will refer to.

```tsx
// example

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothungMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = [
    'red',
    'green',
    'blue'
];

let myNumbers: number[] = [
    1,
    2,
    3
];

let truths: boolean[] = [
    true,
    true,
    false
];

// classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

const add = (a: number, b: number): number => {
    return a + b;
};
```

## Type Inference

---

Typescript tries to figure out what type of value a variable refers to.

```tsx
// example

let apples = 5;
let speed = 'fast';
let hasName = true;
let nothungMuch = null;
let nothing = undefined;

// built in objects
let now = new Date();
```

### When to use annotations

---

1.  Function that returns the any type

```tsx
const json = '{"x":10, "y":20}';
const coord: { x: number; y: number } = JSON.parse(json);
console.log(coord); // { x: 10, y: 20 }
```

2. When we declare a variable on one line and initialize it later.

```tsx
const words = [
    'red',
    'green',
    'blue'
];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
```

3. Var whose type cannot be infered correctly

```tsx
const numbers = [
    -10,
    -1,
    12
];

let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
```

### Annotations with functions

---

```tsx
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

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({
    date,
    weather
}: {
    date: Date;
    weather: string;
}): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);
```

### Annotating & de-structuring objects

---

```tsx
const profile = {
    name: 'alex',
    age: 20,
    coords:
        {
            lat: 0,
            lng: 15
        },
    setAge(age: number): void {
        this.age = age;
    }
};

const { age, name }: { age: number; name: string } = profile;

const {
    coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
```

---

# 📚 Arrays in TS

---

```tsx
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
```

# 🗂 Tuples in TS

---

Array-like structure where each element represents some property of a record, in a particular order.

```tsx
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
```

# 📱Interfaces in TS

---

Creates a new type, describing the property name & value types of an object.

### Comparing interface with no-interface

---

```tsx
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
```

### Function inside interface

---

```tsx
interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
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
const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary());
};
printVehicle(oldCivic);
```

### Generic interface to make it more reusable

---

```tsx
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
```

---

# 🗳 Classes in TS

---

In easy terms, it can be thought of as a blueprint to create an Object with some fields (values) & methods (functions) to represent a 'thing'

```tsx
class Vehicle {
    drive(): void {
        console.log('Reeevvvvv! Reeevvvv!');
    }

    honk(): void {
        console.log('Beep! Beep!');
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
```

## Inheritance

---

```tsx
class Vehicle {
    drive(): void {
        console.log('Reeevvvvv! Reeevvvv!');
    }

    honk(): void {
        console.log('Beep! Beep!');
    }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

// inheritance
class Car extends Vehicle {
    drive(): void {
        console.log('Vroommmm Vroommm !');
    }
}

const car = new Car();
car.drive();
car.honk();
```

### Modifiers

---

**PUBLIC** : This method can be called anywhere, anytime. (it is default, and need not be explicitly specified)

**PRIVATE** : This method can only be called by other methods in this class.

**PROTECTED** : This method can be called by other methods in *this* class, or by other methods in child class.

## Private Modifier

---

```tsx
class Vehicle {
    honk(): void {
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
    }
}

const car = new Car();
car.startToDrive();
car.honk();
```

## Protected Modifier

---

```tsx
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
```

## Fields

---

### [Long version] Initializing using constructor

---

```tsx
class Vehicle {
    // FIELDS
    color: string;

    // constructor to initialize the field in first run
    constructor(color: string) {
        this.color = color;
    }

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
```

### [Alternative/Shortcut version] Initializing using constructor

---

```tsx
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
```

> **NOTE:** The modifiers (public, protected, private) work exactly same for fields, just like classes. But for fields we need to mention public modifier too just like the other two.
