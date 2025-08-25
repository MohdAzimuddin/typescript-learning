let a_ = 12;
console.log(a_);
// because every valid js is a valid ts

//
let Ts: string = "azimuddin";
// Ts = 11
// Ts = true;
Ts = "faizan";
console.log(Ts);

//

let Tn: number = 18;
// Tn = "fa"
// Tn=true
Tn = 17;

console.log(Tn);

// 3
// arrays in ts
// arrays are collection of elements each elements can be of diffrent data types.
// but in ts if you specify the array number you have just add the number no other datta type if you know the array length and exect type on exect position you can use tuples to add multiple data types in an array with ts

let Tarr1: number[] = [1, 2, 3, 5, 1];
console.log(Tarr1);

//
let Tarr2: string[] = ["azimuddin", "vijay", "bhushan"];
console.log(Tarr2);

//

let Tarr3: boolean[] = [true, false, true];
console.log(Tarr3);

// we can use tuples when we know the fixed array length and which data type will be at which place.

let Ttarr1: [number, string, boolean, object, any[]?];

Ttarr1 = [18, "virat", true, { centuries: 82 }];
Ttarr1.push([1, 2, 3]);
console.log(Ttarr1);

// Enums  //enumuration
// enum defines named constant
// enum defines named constant

const enum HttpStatus {
  success = "success code 200",
  notFound = "not found code 404",
}
console.log(HttpStatus.notFound);

const enum statusCode {
  pass = 200,
  fail = 500,
}

console.log(statusCode.pass);

// by default numeric enum

const enum Direction {
  up,
  Down,
  Left,
  Right,
}

console.log(Direction.Right);

// typeScript type hirarcy
//any
// when you us [an]y we can asign any value  to that variable and perform operation i will  never give error in compile time but invalid operations can give error at run time.

// compile time:- befor code running mosttly give syntax error
// run time:-during code execution mostly give operation error

// let Tan: any = "azimuddin";

// let mArr: any[] = [1, 2, 3, 4, "azimuddin", false, { age: 23 }]
// console.log(mArr)

let Tan: any = "azimuddin";
Tan = 18;
Tan = true;
Tan = "faizan";
let Ta = Tan.toUpperCase();
console.log(Ta);

// unknowm
// in the unknown we can also add any type of data type for variable but it must perform type narrowing before any opearition

let Tu: unknown = "AzImmm";

Tu = 19;
Tu = "JETHALAL";
Tu = { naeee: "superV" };
Tu = false;

if (typeof Tu === "string") {
  console.log(
    "if the vlaue will be in string then it will be in lower case:" +
      Tu.toLowerCase()
  );
} else {
  console.log(`the ${Tu} is not a string it is a: ${typeof Tu}`);
}

// void
// we use void for the function which don't return anything useful;

const Tv = (nameaa: string = "Run Machine"): void => {
  console.log(nameaa);
};

Tv("king");

// never
// we use naever in a function which dont finish normally;
// it is useful for showing errors and for infinity loop

// const Tnev = (msg: string): never => { throw new Error(msg)}

// console.log(Tnev(HttpStatus.notFound))

// null and undefined

// null is intentional absense of any value
// undefined is variable is declred but not assigned any vlaue;

//
let Tnu: null = null;

console.log(typeof Tnu);

//
let Tun: undefined = undefined;

console.log(Tun);

// Object
// A non-primitive value
// can be any array,function and plain object
// dosent give detail about properties

const Tobj1: object = {
  profile: "Associate Frontend developer",
};

console.log(Tobj1);
// console.log(Tobj1.profile)

// Type infarence and type annotation

let Ti = 18;
console.log("this is type infarence: " + typeof Ti);

//type annotation :intentionally giving assignning types

let TAn: string = "GOAT";
// TAn=18
console.log(TAn);

//
let countA: number;

countA = 17;
// countA = 19
console.log(countA + 1);

// readonly

let TarrR: readonly unknown[] = [18, "virat", 82, { hero: true }];
// TarrR.push("greatest batsman of all time")  //cant push because read only
console.log(TarrR);

//TypeScript: Interface and type Aliases

// interface
// it defines the face of the object basically which property name and type object will use

interface emp {
  unName: string;
  empId: number;
  profile: string;
  isMember?: boolean;
}

const emp_details: emp = {
  unName: "Mohammed Azeemuddin Shaikh",
  empId: 98765043,
  profile: "Associate Frontend Developer",
  isMember: true,
};
console.log(emp_details.unName);

// destructure
const { unName, empId, profile, isMember } = emp_details;

console.log(
  `${unName} with Employe ID ${empId} assigned for role ${profile} is a premimum member? ${isMember}`
);

// using interface for functional signature

interface TfuncS {
  (a: number, b: number): number;
}

const funcNum: TfuncS = (a, b) => a + b;

console.log(funcNum(15, 5));

// Extending Interfaces

interface Tpersonn {
  uid: string;
  isAdmin: boolean;
}

interface Tpersonn2 extends Tpersonn {
  profile: string;
  ceo?: string;
}

const personDetails: Tpersonn2 = {
  uid: "A150",
  isAdmin: true,
  profile: "Developer",
  ceo: "no",
};

console.log(personDetails.profile);
console.log(personDetails.ceo);

//Type Aliases:-
// type aliases lets us create name for any type(primitive,tuple,object,union)
type Aid = number | string | boolean;

let userid: Aid;

userid = 18;
userid = "abc";
userid = true;

console.log(userid);

// type aliases object face

type Car = {
  bName: string;
  mName: string;
  mNumber: number;
  isSportscar?: boolean;
};

const car_detail: Car = {
  bName: "Audi",
  mName: "Q8",
  mNumber: 1272,
};

console.log(car_detail.mNumber);

// Intersection Types

// type intersection allow us to combined multiple types into one the resulting type must setisfy all combined type.

interface Drivable {
  drive(): void;
}

interface Flayable {
  fly(): void;
}

type DriveFlye = Drivable & Flayable;

const myCar: DriveFlye = {
  drive() {
    console.log("Driving...");
  },
  fly() {
    console.log("Flying...");
  },
};

myCar.fly();

// one more example of type aliases type intersection

type A = {
  a: number;
};
type B = {
  b: number;
};

type C = A & B;

const cab: C = {
  a: 10,
  b: 20,
};

console.log(cab.a + cab.b);

// 2. Functions: Rest Parameter

// sometimes we dont know how many argument the function will recieve typescript provide rest paremeter

const Rpara = (name: string = "Faizan", ...numbers: number[]) => {
  console.log(name);
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

console.log(
  Rpara("Azimuddin bank balence at 25", 10, 20, 10, 101001993, 2223, 56546)
);

// rest should always be last parameter in teh fuction

// they are represent as array inside the fucntion

// 3. Functions: Overloading
// ts allow

// Function signature

// function display(value: string): void;

// function display(vlaue: number): void;

function display(value: string | number): void {
  console.log(`value ${value}`);
}

display("azeemuddin");
display(18);
display("faizan");
display("shaisu");

// generics is a way to create reusable functions/components that works with multiple types with maintaning type safety.

// noraml way now i cant use this fucntion fwith any other type
const Tg = (uId: string): void => {
  console.log(uId);
};
Tg("1a2b3c");

// generic way

// const Tgn=<T>(value:T):T=> {
// return value
// }

// // now this Tgn function is very reusable with any type
// console.log(Tgn<string>("azimuddin"))
// console.log(Tgn<number>(1818))
// console.log(Tgn<boolean>(true))

const Tgn = <T>(value: T): T => {
  return value;
};

console.log(Tgn<number>(12720));
console.log(Tgn<string>("Azimuddin is the best"));
console.log(Tgn<boolean>(true));

// Generic Functions with Multiple Types:

const pairG = <T, U>(empName: T, empJoin: U): [T, U] => {
  return [empName, empJoin];
};

console.log(pairG<string, number>("Mohammed Azeemuddin", 1));

// multiple data types object with genric function

const Mul_data_obj = <T, U>(key: T, value: U): { key: T; value: U } => {
  return { key, value };
};

console.log(Mul_data_obj("Azeemuddin", "Associate Frontend Developer"));

// Generic Interfaces:

interface empolyFace<T> {
  uidd: string;
  naam: string;
  empid: number;
  isImportant?: T;
}

const emp_detailsss: empolyFace<boolean> = {
  uidd: "au12",
  naam: "Azeemuddin",
  empid: 123,
  isImportant: true,
};

console.log(emp_detailsss.naam);
console.log(emp_detailsss.isImportant);

// So What Are Constraints?
//hey tahat T can be on any type but it must have this particualr shape or property.

interface hasName {
  naamS: string;
  mobNum: number;
}

const printName_Num = (
  naam: { naamS: string },
  mobNum: { mobNum: number }
): hasName => {
  return { ...naam, ...mobNum };
};

console.log(printName_Num({ naamS: "Azeemuddin" }, { mobNum: 918291443947 }));

// realife example

interface userr {
  Gname: string;
  agee: number;
}

const pna = <T extends userr>(user: T) => {
  console.log(`user good naem is ${user.Gname} and his age is ${user.agee}`);
};

pna({ Gname: "virat", agee: 35 });

// TypeScript: Modules, Type Assertions,
// and Type Guards

// Modules
// baiscally import and export

// import {removeDuplicateAsecending} from "../Basic_Ts/prac"
// import { min_max } from "../Basic_Ts/prac";
// export { min_max } from "../Basic_Ts/prac";
// import addition from "./prac";
// export { default as addition } from "../Basic_Ts/prac";

// removeDuplicateAsecending([9,8,7,6,5,3,9,1,2,5,4,12,99,20000,43,32])

// console.log(min_max([12, 34, 5, 6, 7, 1, 2, 99, 432, 65, 78, 33, 5, 8, 10]));

// let ad = addition([1, 2, 3, 4, 5, 6, 15, 86876, 23]);
// console.log(`addition of all the given number is ${ad}`);

// Type assertions
// Type Casting
// No-NULL ASSERTION OPERATOR
// TYPE Guard

// Type Assertion
//type assertion tells the ts to treat value as a specific type.

//it only effect on type-checking not runtime behaviour

let valuee: unknown = "Hello Ts";
let isLength: number = (valuee as string).length;

console.log(`lengh of vlauee is ${isLength}`);
// ts cannot infer type properly
//type assertion mostly Narrowing unknown or any or any other type that ts cannot infer properly

function getValue(): unknown {
  return "test";
}

let len = (getValue() as string).length;
console.log(len);

// type casting
// in JS type casting means converting a value to another type. (string to number)
// in ts type casting only happened on compile time assertion not on run time

// (Runtime Casting in JS)

let tcc: string = "12345";
let tccc: number = 12720;

let num: Number = Number(tcc);
let str: String = String(tccc);

let boo: Boolean = Boolean("azzz");
console.log(typeof num);
console.log(str + typeof str);

console.log(boo);

// compile type casting in js
// compile time assertion in tss.

let ctcA: unknown = "1273";

// tc and ta compile time

let tcA = ctcA as number;

console.log(tcA);

// type guard : in my opinion Type guards are runtime checks that allow TypeScript to narrow down the type of a variable within a specific scope.

// type of is type guard

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase() + "_id is a string");
  } else {
    console.log(id * 2 + "_is is a number");
  }
}

printId("azemuddin");
printId(200);

// best practice of type guard

// Discrimnated Unions

// type alsiases with type guard maja ayga

type square = {
  shape: "square";
  size: number;
};

type circle = {
  shape: "circle";
  radius: number;
};

type shakal = square | circle;

const area = (shakal: shakal) => {
  switch (shakal.shape) {
    case "square":
      return shakal.size ** 2;
    case "circle":
      return Math.PI * shakal.radius ** 2;
  }
};

console.log(area({ shape: "circle", radius: 10 }));
console.log(area({ shape: "square", size: 10 }));

// Non-null Assertion ! skip null and undefined check
