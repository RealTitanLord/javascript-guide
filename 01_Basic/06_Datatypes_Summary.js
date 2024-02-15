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
