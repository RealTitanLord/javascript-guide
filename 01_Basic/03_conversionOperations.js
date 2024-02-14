// Its really a Nightmare 💀💀

/* 
So we know that we use typeof() function to get datatype of entered variable .
But what if the user entered invalid or Wrong input as a wrong datatype?

Got Confused? Let me Clear it 

When we use input function in js we get the variable as a String 
So if we want 32 as an int Datatype we get it as a String which mess things up 

So What can we do to clear / convert it?

We use the Respected Datatype Conversion function 

It will be more clear with Following Example
*/

let score = "32"
console.log(typeof(score)); //console.log(typeof score); both are correct way

// By Logging it we know its a String instead of an integer

let stn = Number(score) // Number() function is used here to convert String into integer
console.log(typeof stn);

// After Running That you will Notice It converted Its datatype from a String to a Number
// Same can goes for other Datatype
let stb = Boolean(score)


// Now After This Example The First Thing come into your mind would be what if I Put something which not a Number ?
// Well Lets Try it out

let num = "1s4a5"
console.log(typeof num);

let mun = Number(num)
console.log(typeof mun)
console.log(mun);

// Did you Noticed The change?
// If not Let me Tell you
// NaN in your console, That means Not a Number, Now you ask but didnt it show its a Number integer too inside the console?
// Well It Converted it into a number but when it converted it notice its not a valid number
// Now you say isnt that a Bug? Well It is But Its also a unique feature 😂😂😂

// Now I recommend Do some case study through yourself
// Dont Know Whats a Case study? Dont Worry I got you Covered
// Testing Different Senario in Different things is called Case Study
// For Example:- The NaN Error is a case study we get to know about how Number() works :)
// Now try putting boolean,undefined,null instead of putting a string