let score = "99fdfs"

console.log(score)
console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)

console.log(valueInNumber)
console.log(typeof valueInNumber)

let valueInBoolean = Boolean(valueInNumber)

console.log(valueInBoolean)
console.log(typeof valueInBoolean)

let valueInString = String(valueInBoolean)

console.log(valueInString)
console.log(typeof valueInString)

let valueInArray = Array.from(valueInString)

console.log(valueInArray)
console.log(typeof valueInArray)

// "33" => 33
// "47YHv" => Not a number (NaN)
// "true" => 1
// "false" => 0


let x = 1

let y = Boolean(x)
console.log(y)

// 0,"" => Boolean false
// everything else converted to boolean True

let panda = 89
let polarBear = String(panda)

console.log(polarBear)
console.log(typeof polarBear)

// so yeah the number can be conver to the stings

// Thats it for the conversion types in this file
// what we leanred is conversion of data types in the javaScript Language


let Alpha = "ahdbdyu79"

let AlphaNew = Number(Alpha)

console.log(AlphaNew)
console.log(typeof AlphaNew)

// NaN (Not a Number) is returned because "ahdbdyu79" is not a number




