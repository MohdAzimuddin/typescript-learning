// Benefits of TypeScript types:
// Catches errors early
// Improves code readability and maintainability

// primitive data types using Ts

// String
let userName: string = "Azimuddin";
userName = "Mohd Azimuddin";
console.log("userName:-", userName);

//Number
let age: number = 23;
console.log("age:-", age);

// Boolean
let isLoggedIn: boolean = true;
console.log("is user LoggedIn:-", isLoggedIn);

// Sysmbol
let uniqueId: symbol = Symbol("id");
console.log("uniqueId:-", uniqueId);

// BigInt

let hugeNumber: bigint = 9000000784378393981n;
console.log("hugeNumber:-", hugeNumber);

// Note: Once a primitive data type is assigned to a variable, only values of that same type can be assigned to it.

// 3 Array:
// Arrays can be typed in two ways:

// 1. Square Bracket Syntax

let numbersArray: number[] = [1, 2, 3, 4];
numbersArray.push(18);

console.log(numbersArray);

let stringArr: string[] = ["Azimuddin", "Shyam", "Virat"];
console.log(stringArr);

// 2. Generic Syntax

let numbersArrayG: Array<number> = [1, 2, 3];
console.log(numbersArrayG);
//
let stringArrG: Array<string> = ["apple", "orange"];
console.log(stringArrG);

// Read-only arrays

let readOnlyArr: readonly number[] = [18, 7, 45];
// readOnlyArr.pop()  Error: beacuse readonly

console.log(readOnlyArr);

// 4. Tuples
// Tuppes are fixed-length array with specific type in speciifc position

let goatCricketer: [string, number] = ["virat kohli", 18];
// let goatCricketer:[string,number]=[18,"virat Kohli"]  //Error
console.log(goatCricketer);

// Optional tuple elements:

let address: [string, string?, number?] = ["Neral", "karjat", 410101];

// address=["Neral"]
// address=["Neral","City"]
// address=["Neral","karjat",410101]

console.log(address);

// Named tuples (for readability):
let player: [name: string, JersyNo: number] = ["virat", 18];
console.log(player);

// Enumuration(Enums)
//Enum defines named constant

// Numeric Enums

enum Direction {
  up, //0
  Down,
  Left,
  Right, //3
}

let move: Direction = Direction.up;
console.log(move);

// Custom numeric values

enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

console.log(StatusCode.Success);
console.log(StatusCode.ServerError);

// String Enums

enum Status {
  Success = "success code is 200",
  BadRequest = "Bad request code is 404",
}

console.log(Status.Success);

// Const Enums

const enum DirectionConst {
  Up,
  Down,
  Left,
  Right,
}

console.log(DirectionConst.Right);

// any

// Disabled type cehcking
// we should use it if we truely dont know the type

let data: any;
data = "Hello";
data = true; //if other data type then string appear at last the below function will not work

// function anyData():string{
//     return data.toUpperCase()
// }

// console.log(anyData())

// unknown
let unData: unknown;

unData = "Virat";
unData = 18;
unData = true;

if (typeof unData === "string") {
  console.log(unData);
}

// void:
// use it for function that dont return anything

function sayHi():void{
    console.log("Hi i am void")
}


sayHi()


// Null
// intentional absance of any value
let a:null;
// a=42       //error
// a="virat"   //error


// Undefined
// varaible that hasn't been assigned
 let u:undefined;
//  u="Azeemuddin";      //error
//  u=12;                //error



// Never
//  function will never fisih normally

console.log("Hi before never")

function forever():never{
    while(true) {}
    // console.log("i am never")  means that TypeScript expects the function to never finish normally, but this function has a code path that does end normally, which is a contradiction.
}

// forever()
console.log("Hi after never")


// Type Inference
// TypeScript can guess the type from the value we assigned
let TI = 10; 
// TI= "hello"

console.log("example of type inference_ "+typeof TI)


// Type Annotations
// You explicitly declare the type.


let naam: string;

naam="virat"

console.log("example of type Annotation_ "+ typeof naam)

// 
// 
// 
// Defining interfaces
// Using interfaces to define object shapes
// Extending interfaces
// Type aliases
// Intersection types



// type interface: it help us to structure the object interface it tells ts what object should look like


interface User{
  id:number;
  name:string;
  isAdmin:boolean;
}

// any object of type (User) must have these three properties id,name,isAdmin


const user:User={
  id:1,
  name:"Kohli",
  isAdmin:true,
}
const {id,name,isAdmin}=user

console.log({id,name,isAdmin})


// 
// 2. Using Interfaces to Define Object Shapes

interface Product{
  id:number;
  title:string;
  price:number;
  tags?:string[]; //optional
}


const book:Product={
id:101,
title:"Azeemuddin Life Stroy",
price:3000,
tags:["chaser","Goat"],
}


console.log(`Id number ${book.id} with ${book.title} is now available at ${book.price} with tag ${book.tags}`)


// Example: Function Signatures


interface MathOperation {
  (a:number,b:number):number
}
const addd:MathOperation=(a,b)=>a+b;
console.log(addd(10,10))


// Extended interface
// an interface can extend other interface (like inherietence in oop) this allow code resuability abd complex structure
 
interface Person{
  naaam:string;
  agee:number;
}

interface Employee extends Person{
  employeId:number;
  role:string;
}

const dev: Employee={
naaam:"Mohammed Azeemuddin",
agee:23,
employeId:1,
role:"Frontend developer"

}

// descructuring
const {naaam,agee,employeId,role}=dev;


console.log({naam,agee,employeId,role})

// Employee automatically inherits name age from person



// Type Aliases
// type aliases lets us create new name for any type (primitive,union,tuples,object,etc)

// Type aliases help us to create new name for any type(primitive,union,tuples,objects,etc)

type idd=number | string;

let userIdd:idd;

userIdd="ax1234"
userIdd=101
// userIdd=true

console.log(userIdd)


// Object shape with type aliases

type Car={
  brand:string;
  year:number;
  model:string;
}


const carr:Car={
brand:"BMW",
year:2025,
model:"ZUPEX"
}


console.log(carr.brand)


// TYPE ALIASES for object looks similar when defining object shape but type aliases are more flexible (they can represent primitive,tuples and unions)


// Intersection type

// intersection type allow us to combined multiple types into one. the resulting type must statisfy all teh combined types

interface Drivable{
  drive():void;
}
// 
interface Flayable{
  fly():void;
}

type CarTest=Drivable & Flayable


const myCar:CarTest={
  drive(){
    console.log("azim is driving");
  },
   fly(){
    console.log("azim is flying")
  },
}

myCar.drive()
// myCar.fly()

// intersection type (combined object)

type A={x:number}
type B={y:number}

type C=A&B

const Point:C={
  x:10,
  y:10,
}

console.log(Point.x+Point.y+"Type intersection combined object")


interface goat{
  namee:string;
  json:number;
}

interface goat{
  centuries:number;
  title:string;
}


const Goatli:goat={
  title:"King",
  json:18,
  centuries:82,
  namee:"Virat Kohli",
}


const {title,json,centuries,namee}=Goatli

console.log({title,json,centuries,namee})