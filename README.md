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

# ⚠️ Catching errors in TS

---

## A. Using Interface (defines a new type)

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

## Object Types

1. **Function**
2. **Arrays**
3. **Classes**
4. **Objects**

## Type Annotations

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
