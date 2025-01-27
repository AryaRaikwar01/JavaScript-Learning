// Primitive values will go to stack meamory and Non Primitive values will go to heap memory

let x = 100;
let y = x;

y = 20;

console.log("x:", x);
console.log("y:", y);

// NOw Strings

const Name = "Arya";
const SurName = "Raikwar";
const joise = new String("Hello, world! Arya here!")

console.log(`the name of the genius is ${Name} and his SurName is ${SurName}`);
console.log(`the name of the Genius is ${Name} ${SurName}`);
console.log(joise)
console.log(joise[0])
console.log(joise.__proto__) // .__proto__ is a property that gives acess to object prototype!

let joise2 = { name: "Arya" };
console.log(joise2.__proto__);


// Understanding the concept of object prototype from its blueprint

let blueprint = { talk: () => console.log("Hello World") }
let robot = Object.create(blueprint)
console.log(robot.__proto__)
robot.talk();

// Ye Boy!! 
const pikachu = "pikachu"
const pikachu2 = "    pikachu    "
console.log(pikachu2)
console.log(pikachu2.trim()) //its used to cut the white spaces on the result!!!!!!!!!


const url = "https://Arya%20Raikwar.com/"

console.log(decodeURI(url)) // This will give the correct URL without any special characters
console.log(url.replace('%20', '-')) //for replacing the error of the code!!!
console.log(url.replace('%20', '@'))
console.log(url.split('@'))

let hero = "  Tony Stark  ";

console.log(hero.trim());         // "Tony Stark"
console.log(hero.toUpperCase());  // "TONY STARK"
console.log(hero.includes("Stark")); // true
console.log(hero.replace("Tony", "Iron")); // "Iron Stark"
console.log(hero.slice(0, 4));  // "  To"

console.log(`Fuck you baby`) 

let text = "İSTANBUL";
console.log(text.toLocaleLowerCase("tr")); // this is Language specific basicallly customized
console.log(text.toLowerCase()); // "i̇stanbul" (may not correctly lowercase 'İ')




