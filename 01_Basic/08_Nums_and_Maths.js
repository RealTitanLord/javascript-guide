//Just like we learned in last file when we create a string using new() function it will create it as an object so just like string we can declare as an object too
const num = new Number(100);
const num2 = 422;
console.log(num); // See How terminal Specially declare it as a Number
console.log(num2); // Whither on this terminal just printed 422 Number

// Just like string we also get some prototype for the numbers but compare to them Numbers got a low amount of them
console.log(num2.toString()); // It will Convert it to a string
console.log(num2.toFixed(2)); // It is the Mostly Used prototype. Mainly used in E-Commerce websites. Its Main purpose is to compress down the number to a readable value. For eg: 13151315.348616513516 = 13151315.34

const num3 = 100000000; // a lot of zeros how can i count it?
console.log(num3.toLocaleString("en-IN")); // It will convert it to a string and return with , {This method is set default to US Standard}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Lets Talk About Maths In JavaScript (I can See Jimmy Crying in the Corner Because of Maths)
// But Don't worry Jimmy Its not that hard in JavaScript

console.log(Math); // When you Run it you will Notice that Math is an Object Itself in JavaScript and Contains a lot of Methods inside it

//Lets Look at some Methods
console.log(Math.abs(-88)); // It will convert it to a absolute number means just removing the - sign from it
console.log(Math.round(4.6)); // It will round off the number to the nearest integer value
console.log(Math.floor(4.6)); // It will round off the number to the nearest down value. For example:- Floor value of 4.6 is 4
console.log(Math.ceil(4.6)); // It will round off the number to the nearest up value
console.log(Math.min(5, 2, 7, 8, 64, 1)); // It will Find the Minium value in Array
console.log(Math.max(5, 2, 7, 8, 64, 1)); // It will Find the Maximum value in Array
console.log(Math.random()); // The most used Method in Maths Object. The value will be always comes between 0 and 1

// What if we need numbers between 2 particular values. Let me Show u

const min = 10

const max = 20

const value = Math.floor(Math.random() * (max - min + 1))
/*
 See I can Print the value Directly But to make the logic easier I am adding another variable called value
 So we Know that random Gives out value between 0 and 1
 and we are using floor here to convert that long decimal integer into a single number
 So to get the value between min and max we need to first subtract min from max and then add 1 in to so the number doesnt to 0
 and then we need to add min to that number to get the value
 So first we get a random number then we multiple it by the value of Max - min +1
 For example:- Let random number be 0.2234751245222 if we applied floor on it. This will convert it to 0
 then (20 - 10 + 1) will be equal to 11
 multiply 0 * 11 we will get 0 but because it is lower than 10 that doesnt meet out condition of having Minium value of 10 so to make it 10 we add 
 min value in to it 

 long story short the final code should look like this 
 console.log((Math.floor(Math.random() * (max - min + 1)) + min))

 This is a Very Important Concept
*/
console.log(value + min);