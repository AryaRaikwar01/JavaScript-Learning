//Dates
let myDate = new Date()

console.log("Today's date: ", myDate.toLocaleDateString())
console.log("Today's date Jason Blacked: ", myDate.toJSON())
console.log("Today's date: ", myDate.toDateString())
console.log("Today's date: ", myDate)  //Special Case
console.log("Today's date: ", myDate.toString())

console.log("Thanks For Reading!")


console.log("================================")

// Date : Date is an object in javascript.
// // JavaScript stores dates as number of milliseconds since January 01, 1970
// const myDate = new Date();
// console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// // We can use various methods to convert this date into more readable value.
// console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

// console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
// console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
// console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

// console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
// console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

// console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
// console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z

console.log("================================")

let lanaRhoades = new Date()
console.log(lanaRhoades)
console.log(lanaRhoades.getMonth() + 1)
console.log(lanaRhoades.getFullYear() + 1)
console.log(lanaRhoades.getHours() + 1)
console.log(lanaRhoades.getMilliseconds() + 1)

console.log("================================")

let now = new Date();

console.log(now.getFullYear());  // Gets the year
console.log(now.getMonth() + 1); // Gets the month (0-based, so add 1)
console.log(now.getDate());      // Gets the day of the month
console.log(now.getDay());       // Gets the day of the week (0 = Sunday, 1 = Monday)
console.log(now.getHours());     // Gets the hours
console.log(now.getMinutes());   // Gets the minutes
console.log(now.getSeconds());   // Gets the seconds
console.log(now.getMilliseconds()); // Gets the milliseconds

console.log("================================")

let myBirthday = new Date(2004, 7, 20);  // Year, Month (0-based), Day
console.log("MyBirthday:", myBirthday);


