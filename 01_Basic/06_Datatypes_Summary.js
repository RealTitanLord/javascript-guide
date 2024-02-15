/*So Lets Summarize DataTypes
    There are 2 Types of DataTypes that Primitive and Non primitive
    
    Primitive Datatypes (We Covered all of these except Symbol):
    1. Number
    2. String
    3. Boolean
    4. Null
    5. Undefined
    6. Symbol
    7. BigInt (Used to take Big Scientific Number) 
*/
let num = 112; // Number

let str1 = "Hello"; // String

let IsLoggedIn = false; // Boolean

const Temp = null; //null

let email; //Undefined

const id = Symbol("123"); //Symbol
const id2 = Symbol("123"); //Symbol

console.log(id === id2); //Comparing 2 Symbol with same value but still both of them are different

const bigNumber = 3456543576654356754n; //BigInt
/*    
    Non Primitive (Reference) Datatypes:
    1. Array
    2. Object
    3. Function
Let me Show you Simple Examples of Non Primitive Datatypes  we will learn more about them in later
*/

const alphabets = ["a", "b", "c", "d", "e"]; // This is an array of alphabets
const Obj = {
  name: "Titan",
  country: "India",
}; // This is an object

const func = function () {
  console.log("Hello World");
}; // This is a function

//Lastly We use typeof() to know DataTypes eg:- console.log(typeof())

//---------------------------------------------------------------------------------------------------------//

//Lets Cover Memory too
// There are Two Types of Memory
// Heap Memory and Stack Memory
// Stack Memory Gives a Copy of The Declare Variable. It is used in Primitive Datatypes
// Heap Memory Gives a Reference pf the Variable Means IF we change the variable the original variable will be replaced. It is used in Non Primitive DataTypes
// Lets look in Example
let name = "Titan"; // This is Currently Stored Inside Stack Memory

let name2 = name;

console.log(name2); // This will print "Titan" when it will run 
// But what if i declare another value inside name2?
// Lets Check it out
name2 = "Lord of Titans"

console.log(name);
console.log(name2);
// As you can see in the example above We changed the variable but the original variable didnt get changed because it give as a copy of the variable

// Let's come to Heap Memory

let user1 = {
    name: "Titan",
    email: "user@gmail.com",
    uuid: "123456789"
}

// This is Stored Inside Heap Memory

let user2 = user1;

user2.email = "user2@gmail.com" // we will talk more about objects in future

console.log(user2);
console.log(user1);
// As You can see Both emails in both user1 and user2 got changed because they are different but share same References