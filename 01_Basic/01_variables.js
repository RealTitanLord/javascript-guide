/* There are 3 Types of Variables
let
var
const
*/

let test = "tested" // Let is used to assign Block-Scoped Variables their value can be changed / modified

var guyNumber = 35 // Var is used to assign Function-Scoped Variables their value can be changed / modified (Note: I Highly Recommend to use them as low as you can they can be modified so easily)

const Civil = "Titan" // Const are used to Assign Block-Scoped Variables their cant be changed / modified

console.log(test, guyNumber, Civil); // Use to Show Output

// To run this open your terminal using (Ctrl + `) and run node <filename> for example:- node 01_variables.js

test = "Test is still continue"
guyNumber = 62

console.table([test, guyNumber, Civil]) // Use to Show Output in Table Formate