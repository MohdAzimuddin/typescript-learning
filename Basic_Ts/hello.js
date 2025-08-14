// Benefits of TypeScript types:
// Catches errors early 
// Improves code readability and maintainability
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
var hugeNumber = 9000000784378393981n;
console.log("hugeNumber:-", hugeNumber);
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
