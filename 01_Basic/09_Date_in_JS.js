// Dates In JS. ECMAScript is been Applying New Formate to Impliment Dates in Future by making it as an Object instead.
// But Till then this is how you declare a date
let date = new Date();
//By default the date we saw in the terminal is unreadable
console.log(date);
// To make it readable we use following methods
console.log(date.toDateString()); // Wed Feb 21 2024
console.log(date.toISOString()); // 2024-02-21T08:08:00.881Z
console.log(date.toString()); // Wed Feb 21 2024 13:38:00 GMT+0530 (India Standard Time)
console.log(date.toJSON()); // 2024-02-21T08:08:00.881Z
console.log(date.toLocaleDateString()); // 21/2/2024
console.log(date.toLocaleString()); // 21/2/2024 1:38:00 pm

// As you can see Using different date methods we get different output and it becomes more readable
// toISOString and toJSON both methods give same output in YYYYYY-MM-DDTHH:mm:ss.sssZ Formate
//console.log(typeof Date);// And Date is an Object
let newCreatedDate = new Date(2023, 6, 22, 5, 17, 26); // You can Also declare a date as you wised but remember you need to use YYYYYY-MM-DDTHH:mm:ss.sssZ Formate
console.log(newCreatedDate.toLocaleString());

// Now Lets Learn about TimeStamp
//TimeStamp are usually the time your certainly in milliseconds

let timeStamp = Date.now()
console.log(timeStamp); // to get the time in seconds by 1000
console.log(timeStamp/1000); // but after that we get time in decimals which makes it hard to compare and calculate so we add Math.floor() method
console.log(Math.floor(timeStamp/1000));

// You can also customize Date time formate as you want using toLocaleString. Let me Show you how

let newDate = new Date();

let customDate = newDate.toLocaleString('default',{
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC'
});
// if you click on CTRL + Space you can find the customize property
console.log(customDate);