"use strict";
// Benefits of TypeScript types:
// Catches errors early
// Improves code readability and maintainability
Object.defineProperty(exports, "__esModule", { value: true });
// primitive data types using Ts
// String
var userName = "Azimuddin";
userName = "Mohd Azimuddin";
console.log("userName:-", userName);
//Number
var age = 23;
console.log("age:-", age);
// Boolean
var isLoggedIn = true;
console.log("is user LoggedIn:-", isLoggedIn);
// Sysmbol
var uniqueId = Symbol("id");
console.log("uniqueId:-", uniqueId);
// BigInt
// let hugeNumber: bigint = 9000000784378393981n;
// console.log("hugeNumber:-", hugeNumber);
// Note: Once a primitive data type is assigned to a variable, only values of that same type can be assigned to it.
// 3 Array:
// Arrays can be typed in two ways:
// 1. Square Bracket Syntax
var numbersArray = [1, 2, 3, 4];
numbersArray.push(18);
console.log(numbersArray);
var stringArr = ["Azimuddin", "Shyam", "Virat"];
console.log(stringArr);
// 2. Generic Syntax
var numbersArrayG = [1, 2, 3];
console.log(numbersArrayG);
//
var stringArrG = ["apple", "orange"];
console.log(stringArrG);
// Read-only arrays
var readOnlyArr = [18, 7, 45];
// readOnlyArr.pop()  Error: beacuse readonly
console.log(readOnlyArr);
// 4. Tuples
// Tuppes are fixed-length array with specific type in speciifc position
var goatCricketer = ["virat kohli", 18];
// let goatCricketer:[string,number]=[18,"virat Kohli"]  //Error
console.log(goatCricketer);
// Optional tuple elements:
var address = ["Neral", "karjat", 410101];
// address=["Neral"]
// address=["Neral","City"]
// address=["Neral","karjat",410101]
console.log(address);
// Named tuples (for readability):
var player = ["virat", 18];
console.log(player);
// Enumuration(Enums)
//Enum defines named constant
// Numeric Enums
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var move = Direction.up;
console.log(move);
// Custom numeric values
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.Success);
console.log(StatusCode.ServerError);
// String Enums
var Status;
(function (Status) {
    Status["Success"] = "success code is 200";
    Status["BadRequest"] = "Bad request code is 404";
})(Status || (Status = {}));
console.log(Status.Success);
console.log(3 /* DirectionConst.Right */);
// any
// Disabled type cehcking
// we should use it if we truely dont know the type
var data;
data = "Hello";
data = true; //if other data type then string appear at last the below function will not work
// function anyData():string{
//     return data.toUpperCase()
// }
// console.log(anyData())
// unknown
var unData;
unData = "Virat";
unData = 18;
unData = true;
if (typeof unData === "string") {
    console.log(unData);
}
// void:
// use it for function that dont return anything
function sayHi() {
    console.log("Hi i am void");
}
sayHi();
// Null
// intentional absance of any value
var a;
// a=42       //error
// a="virat"   //error
// Undefined
// varaible that hasn't been assigned
var u;
//  u="Azeemuddin";      //error
//  u=12;                //error
// Never
//  function will never fisih normally
console.log("Hi before never");
function forever() {
    while (true) { }
    // console.log("i am never")  means that TypeScript expects the function to never finish normally, but this function has a code path that does end normally, which is a contradiction.
}
// forever()
console.log("Hi after never");
// Type Inference
// TypeScript can guess the type from the value we assigned
var TI = 10;
// TI= "hello"
console.log("example of type inference_ " + typeof TI);
// Type Annotations
// You explicitly declare the type.
var naam;
naam = "virat";
console.log("example of type Annotation_ " + typeof naam);
// any object of type (User) must have these three properties id,name,isAdmin
var user = {
    id: 1,
    name: "Kohli",
    isAdmin: true,
};
var id = user.id, name = user.name, isAdmin = user.isAdmin;
console.log({ id: id, name: name, isAdmin: isAdmin });
var book = {
    id: 101,
    title: "Azeemuddin Life Stroy",
    price: 3000,
    tags: ["chaser", "Goat"],
};
console.log("Id number ".concat(book.id, " with ").concat(book.title, " is now available at ").concat(book.price, " with tag ").concat(book.tags));
var addd = function (a, b) { return a + b; };
console.log(addd(10, 10));
var dev = {
    naaam: "Mohammed Azeemuddin",
    agee: 23,
    employeId: 1,
    role: "Frontend developer",
};
// descructuring
var naaam = dev.naaam, agee = dev.agee, employeId = dev.employeId, role = dev.role;
console.log({ naam: naam, agee: agee, employeId: employeId, role: role });
var userIdd;
userIdd = "ax1234";
userIdd = 101;
// userIdd=true
console.log(userIdd);
var carr = {
    brand: "BMW",
    year: 2025,
    model: "ZUPEX",
};
console.log(carr.brand);
var myCar = {
    drive: function () {
        console.log("azim is driving");
    },
    fly: function () {
        console.log("azim is flying");
    },
};
myCar.drive();
var Point = {
    x: 10,
    y: 10,
};
console.log(Point.x + Point.y + "Type intersection combined object");
var Goatli = {
    title: "King",
    json: 18,
    centuries: 82,
    namee: "Virat Kohli",
};
var title = Goatli.title, json = Goatli.json, centuries = Goatli.centuries, namee = Goatli.namee;
console.log({ title: title, json: json, centuries: centuries, namee: namee });
// Functions
//Functions are resusable block of code design to perfome a specific task.
// Functions in Ts
// Type Annotation
function addition(a, b) {
    return a + b;
}
console.log(addition(10, 5));
//Optional parameter
function optionalPara(name, age, jno) {
    // console.log(`${name} is a ${age} year's old`)
    console.log("".concat(name, " is a ").concat(age, " year's old with jersy no ").concat(jno));
}
optionalPara("virat", 35, 18);
// Default Parameters
var defaultPara = function (name, age, centuries) {
    if (name === void 0) { name = "virat"; }
    return console.log("".concat(name, " is a ").concat(age, " years old with ").concat(centuries, " centuries"));
};
defaultPara(undefined, 35, 82);
//
var defaultPara2 = function (name) {
    if (name === void 0) { name = "virat"; }
    return console.log("Goat name is ".concat(name, " "));
};
defaultPara2("kohli");
//Functions: Rest Parameter
// sometimes we dont know how many argument a function will recieve.  so js/ts prove rest paremeter for it
var Mul = function (a, b) { return a * b; };
console.log(Mul(5, 5));
// in the above  case we know the argument but what if we have large se t of argument??? then comes the rest in place
var Mult = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
};
console.log(Mult(1, 2, 3, 4, 6, 7, 8, 9, 1, 2, 3, 4, 5));
function display(value) {
    console.log("vlaue of function override is ".concat(value));
}
display("Hello");
display(100);
//Generics
// generics is way to create resuable componet/function that works with a varity of types while still maintaining the type safety
function identity(identity_id) {
    return identity_id;
}
console.log(identity("Mz12333"));
console.log(identity(123));
console.log(identity(false));
// Generic Functions with Multiple Types:
function pairGeneric(first, second) {
    return [first, second];
}
console.log(pairGeneric("Mohd Azimuddin", 23));
//
console.log(pairGeneric(123, true));
var detailObj = {
    namess: "Mohd Azimuddin",
    ids: 1,
    isLoggedIns: true,
};
var namess = detailObj.namess, ids = detailObj.ids, isLoggedIns = detailObj.isLoggedIns;
console.log({ namess: namess, ids: ids, isLoggedIns: isLoggedIns });
var genricObj = {
    naaamd: "Azim",
    idsd: 18,
    isLoggedInsd: true,
    userDetailss: "Frontend Developer",
};
var naaamd = genricObj.naaamd, idsd = genricObj.idsd, isLoggedInsd = genricObj.isLoggedInsd, userDetailss = genricObj.userDetailss;
console.log({ naaamd: naaamd, idsd: idsd, isLoggedInsd: isLoggedInsd, userDetailss: userDetailss });
function priontName(obj, isd) {
    console.log(obj.hola + "_" + isd);
}
priontName({ hola: "foo" }, 123);
// Modules
var practice_1 = require("./practice");
var practice_2 = require("./practice");
(0, practice_2.default)("Faizan", 30000, "15-10-205");
(0, practice_1.makePayment)(18);
(0, practice_1.RecivePayment)("Azimuddin");
// What are Type Assertions?
// type Assertion tells type-script to treat a vlaue as a specific type ,even if compiler cannot infer it.
// // angle bracket syntex
// let value: unknown = "Hello Assertion";
// let steLength:number=(<string>value).length
// console.log(steLength)
var unVlaue = "virat";
// as syntex
var capitalize = unVlaue.toUpperCase();
console.log(capitalize);
// when ts cannot infer type property
// document.getElementById("elementId") as HTMLInputElement;
// console.log( input.value)
// Narrowing unknown or any
function getValue() {
    return "TeSt";
}
var len = getValue().toLowerCase();
console.log(len);
// Type Casting
// in js when change the one type to another type is called type casting (string to number)
// in ts there is no true castin only assertion that tells the compiler how to treat a value
var num = Number("123");
console.log(num);
var str = Object(123);
console.log(str);
// Non-Null asertion operation
var aaa;
aaa = "12";
console.log(aaa);
//Type guards are how you do type narrowing
function TG(arg) {
    if (typeof arg === "string") {
        console.log("this is string");
    }
    else if (typeof arg === "number") {
        console.log("this is number");
    }
    else {
        console.log("are you crazy");
    }
}
TG(18);
TG("Azimuddin");
TG(null);
