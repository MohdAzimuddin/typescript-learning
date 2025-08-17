## **1. Introduction to Basic Types**

TypeScript is a **superset of JavaScript** — meaning all JavaScript is valid TypeScript, but TypeScript adds **static typing**.

In JavaScript:

```js
let name = "John"; // can be anything later
name = 42; // allowed in JS, not in TypeScript (with types)
```

In TypeScript:

```ts
let name: string = "John"; // must stay a string
// name = 42; ❌ Type error
```

**Benefits of TypeScript types:**

* **Catches errors early** (during compile time).
* **Improves code readability** and maintainability.
* **Better IntelliSense** (autocomplete & hints in editors).

---

## **2. Primitive Types**

Primitive types are the basic building blocks of TypeScript.

| Type        | Example             | Notes                     |
| ----------- | ------------------- | ------------------------- |
| `string`    | `"Hello"`           | Text data                 |
| `number`    | `42`, `3.14`        | No separate int/float     |
| `boolean`   | `true`, `false`     | True/false values         |
| `null`      | `null`              | Explicitly empty          |
| `undefined` | `undefined`         | Variable not assigned yet |
| `symbol`    | `Symbol("id")`      | Unique identifiers        |
| `bigint`    | `9007199254740991n` | Large integers            |

Example:

```ts
let username: string = "Alice";
let age: number = 25;
let isLoggedIn: boolean = true;
let uniqueId: symbol = Symbol("id");
let hugeNumber: bigint = 9007199254740991n;
```

---

## **3. Arrays**

Arrays can be typed in **two ways**:

**1. Square Bracket Syntax**

```ts
let numbers: number[] = [1, 2, 3];
let fruits: string[] = ["apple", "banana"];
```

**2. Generic Syntax**

```ts
let numbers: Array<number> = [1, 2, 3];
let fruits: Array<string> = ["apple", "banana"];
```

**Read-only arrays**

```ts
let readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(4); ❌ Error
```

---

## **4. Tuples**

Tuples are **fixed-length arrays with specific types in specific positions**.

```ts
let person: [string, number] = ["Alice", 25];
// person = ["Bob", 30]; ✅ OK
// person = [25, "Alice"]; ❌ Wrong order
```

**Optional tuple elements:**

```ts
let address: [string, string?, number?];
address = ["Main St"];
address = ["Main St", "City"];
address = ["Main St", "City", 12345];
```

**Named tuples** (for readability):

```ts
let user: [name: string, age: number] = ["Bob", 30];
```

---

## **5. Enums**

Enums define **named constants**.

**Numeric Enums (default)**

```ts
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}
let move: Direction = Direction.Up;
```

**Custom numeric values**

```ts
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}
```

**String Enums**

```ts
enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
```

**Const Enums** (better performance, no runtime object)

```ts
const enum DirectionConst {
  Up,
  Down,
  Left,
  Right
}
```

---


## **6 any, unknown, void, never, null, and undefined fit together in TypeScript’s type hierarchy.**

## 1. **`any`**

**Meaning:** "I give up — TypeScript, stop checking this."

* Completely disables type safety for that variable.
* You can assign anything to it, and do anything with it — even things that make no sense — and the compiler won’t complain.
* Often called the "escape hatch" type.

**Example:**

```ts
let data: any = 42;
data.toUpperCase(); // No error at compile time — but will crash at runtime!
```

**When to use:**

* Rarely. Usually when integrating with old JS code or a library with no types.
* Use as a temporary solution, then replace with a real type.

**Risk:**

* Completely bypasses the benefits of TypeScript — you might as well be writing plain JavaScript.

---

## 2. **`unknown`**

**Meaning:** "I don’t know what this is yet — so you must check first."

* Like `any`, it can hold any value.
* But unlike `any`, **you can’t use it without type-checking or narrowing**.
* Forces you to prove the type before doing anything with it.

**Example:**

```ts
let value: unknown = "Hello";

// Direct use ❌
value.toUpperCase(); // Error: Object is of type 'unknown'

// Type narrowing ✅
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

**When to use:**

* When you’re dealing with external input (e.g., JSON from an API, user input).
* Safer alternative to `any`.

**Risk:**

* Slightly more verbose — but that’s the point: it keeps you honest.

---

## 3. **`void`**

**Meaning:** "This function doesn’t return anything useful."

* Typically used for function return types.
* Doesn’t mean the function literally returns *nothing* — it means we ignore any return value.

**Example:**

```ts
function logMessage(msg: string): void {
  console.log(msg);
}
```

**Special Note:**

* `void` variables can only be assigned `undefined` (unless `--strictNullChecks` is off).
* In callbacks (like `Array.forEach`), `void` means "don’t care about the return value."

---

## 4. **`never`**

**Meaning:** "This function will never finish normally."

* Functions with `never` either:

  1. Throw an error, or
  2. Have an infinite loop.

**Example:**

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}

function forever(): never {
  while (true) {}
}
```

**Why it’s useful:**

* Helps TypeScript check exhaustiveness in `switch` statements.

```ts
type Shape = { kind: "circle" } | { kind: "square" };

function handleShape(shape: Shape) {
  switch (shape.kind) {
    case "circle": /* ... */ break;
    case "square": /* ... */ break;
    default:
      const _exhaustiveCheck: never = shape; // Error if a new kind is added
  }
}
```

---

## 5. **`null` & `undefined`**

**Meaning:** "No value" (but slightly different flavors).

* `undefined` = a variable that hasn’t been assigned.
* `null` = an explicit “no value” you assign yourself.

```ts
let u: undefined = undefined;
let n: null = null;
```

**With `--strictNullChecks`:**

* You must explicitly allow them in the type:

```ts
let maybeNumber: number | null | undefined;
```

**Common Pitfall:**

* In JavaScript, both are falsy, but they aren’t the same.
* APIs might use one or the other inconsistently — you have to be ready for both.

---

## 6. **`object`**

**Meaning:** "Any non-primitive value."

* Can be an array, function, or plain object.
* Doesn’t give details about properties.

```ts
let user: object = { name: "Alice" };
user.name; // ❌ Property 'name' does not exist on type 'object'
```

**Better:** Use an interface or type for actual structure:

```ts
type User = { name: string };
let user: User = { name: "Alice" };
```

---

## **Quick Reference Table**

| Type        | Can be assigned anything? | Must check before use? | Intended usage                  |
| ----------- | ------------------------- | ---------------------- | ------------------------------- |
| `any`       | ✅                         | ❌                      | Quick escape hatch, legacy code |
| `unknown`   | ✅                         | ✅                      | Safe handling of unknown inputs |
| `void`      | ❌ (functions only)        | N/A                    | No return value                 |
| `never`     | ❌ (functions only)        | N/A                    | Functions that never finish     |
| `null`      | Only `null`               | N/A                    | Explicit empty value            |
| `undefined` | Only `undefined`          | N/A                    | Uninitialized/missing           |
| `object`    | Any non-primitive object  | ❌ (but limited use)    | Avoid for structured data       |

---




## **7. Introduction to Type Inference & Type Annotations**

### **Type Inference**

TypeScript can guess the type from the value you assign.

```ts
let count = 10; // inferred as number
count = "hello"; // ❌ Error
```

### **Type Annotations**

You explicitly declare the type.

```ts
let count: number;
count = 10;
```

When to use annotations:

* When **declaring variables without initializing**.
* For **function parameters and return types**.
* For **complex objects**.

---

## **8. Type Annotations in Functions**

```ts
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): void {
  console.log(`Hello, ${name}`);
}
```

**Arrow functions**

```ts
const multiply = (x: number, y: number): number => x * y;
```

---

## **Pro Tips**

* Prefer **type inference** when it’s obvious, but **use annotations** for clarity in public APIs.
* Avoid `any` unless necessary — prefer `unknown`.
* Use `readonly` for arrays/objects that should not change.
* Use **string enums** if you care about readable debugging.
* Tuples are great for **pairs** and **fixed-format data**.

---

* **Defining interfaces**
* **Using interfaces to define object shapes**
* **Extending interfaces**
* **Type aliases**
* **Intersection types**
---

# 📘 TypeScript: Interfaces and Type Aliases

---

## 1. Defining Interfaces

In TypeScript, **interfaces** are used to describe the shape (structure) of an object. They tell TypeScript what properties and methods an object should have.

### Syntax:

```ts
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}
```

Here, any object of type `User` must have all three properties: `id`, `name`, and `isAdmin`.

### Example:

```ts
const user: User = {
  id: 1,
  name: "Alice",
  isAdmin: true,
};
```

If a property is missing or has the wrong type, TypeScript will throw an error.

---

## 2. Using Interfaces to Define Object Shapes

Interfaces shine when modeling complex **object shapes** or **function signatures**.

### Example: Object Shapes

```ts
interface Product {
  id: number;
  title: string;
  price: number;
  tags?: string[]; // optional property
}
```

* `tags?` means the property is **optional**.

```ts
const book: Product = {
  id: 101,
  title: "TypeScript Handbook",
  price: 29.99,
};
```

### Example: Function Signatures

```ts
interface MathOperation {
  (a: number, b: number): number;
}

const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;
```

Here, `MathOperation` ensures that any function assigned must take two numbers and return a number.

---

## 3. Extending Interfaces

Interfaces can **extend other interfaces** (like inheritance in OOP). This allows code reuse and building complex structures.

### Example:

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  role: string;
}

const dev: Employee = {
  name: "John",
  age: 30,
  employeeId: 1001,
  role: "Frontend Developer",
};
```

Here, `Employee` automatically inherits `name` and `age` from `Person`.

---

## 4. Type Aliases

Type aliases let you **create a new name** for any type (primitive, union, tuple, object, etc.).

### Syntax:

```ts
type ID = number | string;  // can be either number or string

let userId: ID;
userId = 123;    // ✅
userId = "abc";  // ✅
```

### Example: Object Shape with Type Alias

```ts
type Car = {
  brand: string;
  year: number;
};

const car: Car = { brand: "Tesla", year: 2023 };
```

Type aliases and interfaces look similar when defining object shapes, but type aliases are more flexible (they can represent **primitives, unions, and tuples**).

---

## 5. Intersection Types

Intersection types (`&`) allow you to **combine multiple types** into one. The resulting type must satisfy all combined types.

### Example:

```ts
interface Drivable {
  drive(): void;
}

interface Flyable {
  fly(): void;
}

type FlyingCar = Drivable & Flyable;

const myCar: FlyingCar = {
  drive() {
    console.log("Driving...");
  },
  fly() {
    console.log("Flying...");
  },
};
```

### Another Example: Combining Objects

```ts
type A = { x: number };
type B = { y: number };
type C = A & B;  // { x: number; y: number }

const point: C = { x: 10, y: 20 };
```

---

## 🔑 Key Differences: Interface vs Type Alias

| Feature                        | Interface                                                      | Type Alias                                  |
| ------------------------------ | -------------------------------------------------------------- | ------------------------------------------- |
| **Extends / Implements**       | Can be extended and implemented in classes                     | Cannot be "implemented" by classes directly |
| **Object Shapes**              | Preferred for defining object structures                       | Can also define object shapes               |
| **Primitives, Unions, Tuples** | ❌ Not supported                                                | ✅ Supported                                 |
| **Declaration Merging**        | ✅ Supports (interfaces with the same name merge automatically) | ❌ Not supported                             |

👉 **Rule of Thumb**:

* Use **interfaces** when modeling objects and class contracts.
* Use **type aliases** for **unions, primitives, tuples, and advanced type compositions**.


---

# ⚡ Pro Tips for Interfaces & Type Aliases

### 🔹 1. Use **Interfaces** for Objects, **Types** for Flexibility

* **Interfaces** are best when you want to describe the **shape of an object** or enforce a **contract** for a class.
* **Types** shine when you need **unions, intersections, or primitive/tuple aliases**.

👉 Example:

```ts
// Good: Interfaces for objects
interface User {
  id: number;
  name: string;
}

// Good: Types for unions
type ID = string | number;
```

---

### 🔹 2. Prefer **Interfaces** when Extensibility Matters

* Interfaces support **declaration merging** (you can reopen and add properties later).
* Types don’t support this.

👉 Example:

```ts
interface User {
  id: number;
}
interface User {
  name: string;
}

const u: User = { id: 1, name: "Alice" }; // merged interface ✅
```

> If you’re designing **libraries or shared code**, interfaces are safer because other developers can extend them easily.

---

### 🔹 3. Use **Type Aliases** for Complex Compositions

* When combining **multiple unions/intersections**, `type` is much cleaner.

👉 Example:

```ts
type Admin = { role: "admin"; permissions: string[] };
type Customer = { role: "customer"; purchaseHistory: string[] };

type User = Admin | Customer;  // ✅ Easier with type alias
```

Interfaces cannot do this kind of union directly.

---

### 🔹 4. Intersection Types Can Get Tricky

* Be careful with **conflicting properties** in intersection types. If two types define the same property with different types, TypeScript will throw an error.

👉 Example:

```ts
type A = { id: number };
type B = { id: string };
type C = A & B; // ❌ Type error, id cannot be both number and string
```

So, only use intersections when you’re sure the combined properties don’t conflict.

---

### 🔹 5. In React: Favor Types for Props, Interfaces for Context/Models

* **Props & State**: Use `type` (flexible, union-friendly).
* **Data Models (like User, Product, API responses)**: Use `interface` (extendable, more readable in large codebases).

👉 Example:

```tsx
// Good: Props with type
type ButtonProps = {
  label: string;
  onClick: () => void;
};

// Good: Models with interface
interface User {
  id: number;
  name: string;
}
```

---

✨ **Golden Rule**:

* If you’re just describing **shapes** (objects, classes) → **interface**.
* If you’re doing **type transformations, unions, or advanced type composition** → **type alias**.

---



✅ With this foundation, you’ll be comfortable handling **props typing in React**, **API response types**, and **complex object structures** in real-world TypeScript projects.

---

# 📘 TypeScript– Functions & Generics

## 1. Introduction to Functions

Functions in TypeScript are **blocks of reusable code** designed to perform specific tasks. They allow us to write cleaner, modular, and maintainable code.

### ✅ Syntax:

```ts
function functionName(param1: type, param2: type): returnType {
    // function body
    return value;
}
```

### Example:

```ts
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 10)); // 15
```

### Features:

* **Type Annotations:** Parameters and return values can be strongly typed.
* **Optional Parameters:** Parameters can be made optional using `?`.
* **Default Parameters:** Parameters can have default values.
* **Arrow Functions:** A shorthand syntax for functions.

```ts
function greet(name: string = "Guest"): void {
    console.log(`Hello, ${name}`);
}

const multiply = (x: number, y: number): number => x * y;

greet(); // Hello, Guest
console.log(multiply(4, 5)); // 20
```

---

## 2. Functions: Rest Parameter

Sometimes, you don’t know how many arguments a function will receive. TypeScript provides **rest parameters (`...`)** for this.

### ✅ Syntax:

```ts
function functionName(...params: type[]): returnType {
    // function body
}
```

### Example:

```ts
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(10, 20));        // 30
console.log(sum(1, 2, 3, 4, 5)); // 15
```

### Key Points:

* Rest parameters must be the **last parameter** in the function.
* They are represented as **arrays** inside the function.

---

## 3. Functions: Overloading

TypeScript allows **function overloading**, meaning we can declare multiple function signatures for a single function, each with different parameter types or counts.

### ✅ Syntax:

```ts
function functionName(param: type): returnType;
function functionName(param1: type1, param2: type2): returnType;
// Implementation
function functionName(param1: any, param2?: any): any {
    // function logic
}
```

### Example:

```ts
// Function Signatures
function display(value: string): void;
function display(value: number): void;

// Implementation
function display(value: string | number): void {
    console.log(`Value: ${value}`);
}

display("Hello"); // Value: Hello
display(100);     // Value: 100
```

### Key Points:

* Only **one implementation** is allowed.
* Overloading is useful when a function should handle multiple **input types** or **parameter variations**.

---

## 4. Generics

Generics in TypeScript provide a way to **create reusable components** that work with a variety of types, while still maintaining **type safety**.

### ✅ Syntax:

```ts
function functionName<T>(param: T): T {
    return param;
}
```

### Example:

```ts
function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hello")); // Hello
console.log(identity<number>(42));      // 42
```

### Generic Functions with Multiple Types:

```ts
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

console.log(pair<string, number>("Age", 25)); // ["Age", 25]
```

### Generic Interfaces:

```ts
interface Box<T> {
    content: T;
}

const stringBox: Box<string> = { content: "Hello" };
const numberBox: Box<number> = { content: 123 };
```

### Generic Classes:

```ts
class Container<T> {
    private items: T[] = [];
    
    add(item: T): void {
        this.items.push(item);
    }
    
    getAll(): T[] {
        return this.items;
    }
}

const numberContainer = new Container<number>();
numberContainer.add(10);
numberContainer.add(20);
console.log(numberContainer.getAll()); // [10, 20]
```

### Constraints in Generics:

```ts
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

console.log(getLength("Hello"));   // 5
console.log(getLength([1, 2, 3])); // 3
// console.log(getLength(123)); ❌ Error (number has no length property)
```

---

# ✅ Summary

* **Functions**: Reusable blocks of code with typed parameters and return values.
* **Rest Parameters**: Allow passing **variable number of arguments**.
* **Function Overloading**: Define multiple **signatures** for a single function.
* **Generics**: Enable **type-safe reusability** for functions, classes, and interfaces.

---


