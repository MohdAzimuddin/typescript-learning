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

## **6. `any`, `unknown`, `void`, and More**

### **`any`**

* Disables type checking.
* Use **only if you truly don’t know the type**.

```ts
let data: any = 42;
data = "Hello"; // OK
data = true; // OK
```

---

### **`unknown`**

* Like `any`, but **type-safe** — you must check before using.

```ts
let value: unknown = "Hello";
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Safe
}
```

---

### **`void`**

* Used for functions that **don’t return anything**.

```ts
function logMessage(msg: string): void {
  console.log(msg);
}
```

---

### **`never`**

* For functions that **never return** (e.g., throw error, infinite loop).

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

---

### **`null` & `undefined`**

```ts
let u: undefined = undefined;
let n: null = null;
```

---

### **`object`**

```ts
let user: object = { name: "Alice" };
// user.name ❌ Error — need a more specific type
```

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

