//String
const title = "Best movies of 2022";
const series = "K-Drama";
const likes = 1000;

//concatenation way
// let result =
//   "The blog called" +
//   " " +
//   title +
//   " " +
//   "by" +
//   " " +
//   series +
//   " " +
//   "has" +
//   " " +
//   likes +
//   "likes";

// template string way
// result = `The blog called ${title} by ${series} has ${likes} likes`;
// console.log(result);

// let html = `
//     <h2>${title}</h2>
//     <p>By ${series} </p>
//     <span> This blog has ${likes} likes </span>
// `;
// console.log(html);

let favouriateFood = ["apple", "hotpot", "ice-cream"];
favouriateFood[2] = "juice";
console.log(favouriateFood[2]);
console.log(favouriateFood.length);

//array methods
//let result = favouriateFood.join("-");
//let result = favouriateFood.indexOf("hotpot");
//let result = favouriateFood.concat(["coconut", "mango"]);
//let result = favouriateFood.push("coconut");
//let result = favouriateFood.pop();
// console.log(favouriateFood);
// console.log(result);

// let age = null;
// console.log(age, age + 3, `the age is ${age}`);

// booleans & comparisons
console.log(true, false, "true", "false");

//methods can return booleans
let email = "winmawsoe1806@gmail.com";
let names = ["post", "charli", "malone"];

//let result = email.includes('!');
//let result = names.includes('win');
//console.log(result);

// comparison operators
let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 25);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);

let name = "shaun";

// console.log(name == "shaun");
// console.log(name == "Shaun");
// console.log(name > "crystal");
// console.log(name > "Shaun");
// console.log(name > "Crystal");

// loose comparison (different types can equal)
// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// strict comparison (different types cannot equal)

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

//type conversion
let score = "100";
// score = Number(score);
// console.log(score + 1);
//console.log(typeof score);

//let result = Number ('hello');
//let result = String (50);
//let result = Boolean (0);
let result = Boolean(" ");

console.log(result, typeof result);
