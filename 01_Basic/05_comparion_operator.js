//Basic Comparison Operators are
// console.log(2>1);   Greater Than
// console.log(2<1);   Less Than
// console.log(2<=1);  Less Than Equal too
// console.log(2>=1);  Greater than Equal too
// console.log(2==1);  Equal too {Note: "=" Operator is used to assign values and "==" are used to compare them}
// console.log(2!=1);  Not Equal too
// Every Comparison Output Will be in Boolean means It can be "True" or "False"

// Now The Question comes in our mind can be compare 2 different datatypes? Let check it out 
console.log("2">1); // What could be The Result?  It might Surprise you
// Sometimes JavaScript Change the datatypes for you in Comparison. But What if Its not a number or a String?

console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);
console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);
//Before Reading Below Description You Should Run code first 

// I think Comparison Might Confuse 
// Why for null == 0 and null > 0 its False
// Then Why Does it True For null >= 0
// Well According to my knowledge is that the reason thats happening because the equality check "==" works differently from "> , < , <= , >="
// Comparison convert null to a number , treating it as 0
// Thats why null >= 0 is "True" and null > 0 is "False"

// Now the Last Comparison we talk is Strict Comparison

console.log("2" === 2); 

// we use "===" for Strict Comparison It just compare wether both datatypes are same or not