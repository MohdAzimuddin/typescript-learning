// Benefits of TypeScript types:
// Catches errors early 
// Improves code readability and maintainability

// primitive data types using Ts

// String
let userName:string="Azimuddin";
userName="Mohd Azimuddin";
console.log("userName:-",userName);

//Number
let age:number=23;
console.log("age:-",age)


// Boolean
let isLoggedIn:boolean=true;
console.log("is user LoggedIn:-",isLoggedIn)


// Sysmbol
let uniqueId:symbol=Symbol("id")
console.log("uniqueId:-",uniqueId)


// BigInt

let hugeNumber:bigint=9000000784378393981n
console.log("hugeNumber:-",hugeNumber)



// Note: Once a primitive data type is assigned to a variable, only values of that same type can be assigned to it.



// 3 Array: 
// Arrays can be typed in two ways:

// 1. Square Bracket Syntax

let numbersArray:number[]=[1,2,3,4]
numbersArray.push(18)

console.log(numbersArray)

let stringArr:string[]=["Azimuddin","Shyam","Virat"]
console.log(stringArr)

// 2. Generic Syntax

let numbersArrayG:Array<number>=[1,2,3]
console.log(numbersArrayG)
// 
let stringArrG:Array<string>=["apple","orange"]
console.log(stringArrG)

// Read-only arrays

let readOnlyArr: readonly number[]=[18,7,45] 
// readOnlyArr.pop()  Error: beacuse readonly

console.log(readOnlyArr)



// 4. Tuples
// Tuppes are fixed-length array with specific type in speciifc position

let goatCricketer:[string,number]=["virat kohli",18]
// let goatCricketer:[string,number]=[18,"virat Kohli"]  //Error
console.log(goatCricketer)


// Optional tuple elements:

let address:[string,string?,number?]=["Neral","karjat",410101]

// address=["Neral"]
// address=["Neral","City"]
// address=["Neral","karjat",410101]

console.log(address)

// Named tuples (for readability):
let player:[name:string,JersyNo:number]=["virat",18]
console.log(player)


// Enumuration(Enums)
//Enum defines named constant

// Numeric Enums

enum Direction{
    up, //0
    Down,
    Left,
    Right,//3        
}


let move:Direction=Direction.up
console.log(move)


// Custom numeric values

enum StatusCode{
    Success=200,
    NotFound=404,
    ServerError=500,
}

console.log(StatusCode.Success)
console.log(StatusCode.ServerError)


// String Enums

enum Status{
    Success="success code is 200",
    BadRequest="Bad request code is 404"
}

console.log(Status.Success)

// Const Enums

const enum DirectionConst{
    Up,
    Down,
    Left,
    Right
}

console.log(DirectionConst.Right)


// Ay

// any
// Disables type checking.
// Use only if you truly don’t know the type.
let data: any = 42;
data = "Hello"; 
data = true; 
