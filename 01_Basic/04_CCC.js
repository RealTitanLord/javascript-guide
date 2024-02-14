// CCC = Confusion Conversion Cases
/* 
Now we Learn About Conversion of DataTypes Lets Take a Look in some Unique cases and their examples

Before Starting Let Me Tell You About Arithmetic Operators 

+ => Used for Addition              console.log(2+2);
- => Used for Subtraction           console.log(2-2);
* => Used for Multiplication        console.log(2*2);
/ => Used for Division              console.log(2/2);
** => Used for Power                console.log(2**2);
% => Used to find the remainder after dividing one number by another        console.log(2%2);

Now lets Head to Unique Cases and Their Results
*/
let str1 = "Hello"
let str2 = " There"

let str3 = str1 + str2

console.log(str3); // The Output Would be Hello There 
// Now Guess The Output of the following
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");
console.log(1 + "2" + 3);

//Did You Guessed Right?
//Well Now you think why the above things are happening so awkwardly 
//Its Because of DataTypes Conversion error 
//When JS couldnt find same DataTypes it just Do what you tell them to do
// and remember in console.log() we print from left to right

// Lets Talk about Prefix and Postfix Now

//This is Prefix
// In Prefix we Increment (Increasing value) value Before Output 
let x = 5
let y = ++x
console.log(y);

//This is Postfix 
//In Postfix we Increment value After Output
let a = 5
let b = a++
console.log(b);