//So String is Important?
// I am pick that name because it sounds good xD
// Okh so let me ask you something If you have some variables name and language and I ask you to print that,How would you do that?
// I think like this
const name = "Titan";
let language = "JavaScript";
console.log(" " + name + " " + language); // You will do something like this
// Let me Tell you a Modern way to do that we will use ``(Black quotation mark) instead of ''
console.log(`My name is ${name} and I am Know ${language} language`); // Now run it 😎
// See its a lot clear now and MOST IMPORTANTLY, Its Easy to understand. We use ${} to define the variables
// This Thing is called String Interpolation (I know Sounds Weird)

//Now There are 2 ways to declare a variable in JavaScript, I know We just learn one way to do that now its time to learn Second one
const var1 = "Hello"; // This is one way to declare a variable
const var2 = new String("Hello Fellow Corders");

// Now whats the key difference Between Both of them you say?
// Both of them are correct
// But in Second way we are declaring String as an Object, This is mostly used in companies and also an interview question :)
// Just run both of them inside chrome console and you will see the difference better, Just open chrome and click on ctrl + shift + I, then click on console
// You will notice you have access to prototypes for var2 and some others properties too where for var1 you just got an output Hello
// lets first learn how to check a key value pair
console.log(var2[0]); // Why did we get H when we type 0 in [] ? because 0 is the place H holds
/*
These are the Key values which are generated when we declare string as an Object
0: "H"
1: "e"
2: "l"
3: "l"
4: "o"
5: " "
6: "F"
7: "e"
8: "l"
9: "l"
10: "o"
11: "w"
12: " "
13: "C"
14: "o"
15: "r"
16: "d"
17: "e"
18: "r"
19: "s"
*/
// Now lets learn about prototypes to get a prototypes object we put .__proto__ in the end of the variable declaration
// For Eg:- console.log(var2.__proto__); It will give all prototypes but vs code cant show it 🥲,But Chrome Console can 😁
// Lets me show you some good using prototypes
console.log(var2.length); // Used to check the total length of the String
console.log(var2.toUpperCase()); // Used to UpperCase all the alphabets in a String
console.log(var2.toLowerCase()); // Used to LowerCase all the alphabets in a String
console.log(var2.charAt(11)); // Used to find character at a particular index
console.log(var2.indexOf("C")); // Used to find a key value of a particular index

const var3 = "         AbCD               ";
console.log(var3);
console.log(var3.trim()); // This will Remove the unwanted whitespace

// Let me Give you a Homework today :-}
// Your today's Homework is to learn about SubString **Important thing :], If you Master String JavaScript will be Easy for you
