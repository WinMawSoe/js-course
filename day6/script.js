// regular function
const calArea = function (radius) {
  return 3.14 * radius ** 2;
};

// arrow function
const calcArea = (radius) => "3.14 * radius ** 2";

const area = calcArea(5);
console.log(area);
console.log("Area is:", area);

// practise arrow functions

// const greet = function () {
//   return "hello, world";
// };

// const greet = () => "hello, world";
// const result = greet();
// console.log(result);

// const bill = function (products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

const bill1 = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};
console.log(bill1([10, 15, 30], 0.2));

const name = "win";

// functions

const greet = () => "Hello";

let resultOne = greet();
console.log(resultOne);

// methods

let resultTwo = name.toUpperCase();
console.log(resultTwo);

// callbacks & foreach

const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
};

myFunc(function (value) {
  console.log(value);
});

let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};
people.forEach(logPerson);

//  people.forEach((person, index) => {
//      console.log(index, person);
//  });

// get a reference to the 'ul'

const ul = document.querySelector(".people");

let html = ``;

people.forEach((person) => {
  html += `<li style= "color: purple"> ${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
