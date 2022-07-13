// rest parameter

const double = (...nums) => {
  // do something
  console.log(nums);
  return nums.map((num) => num * 2);
};

const result = double(1, 3, 5, 7, 9, 2, 4, 6, 8);
console.log(result);

// spread syntax (arrays)

const people = ["shaun", "ryu", "crystal"];
const members = ["mario", "chun-li", ...people];
console.log(members);

// spread syntax (objects)

const person = { name: "shaun", age: 30, job: "net ninja" };
const personClone = { ...person, location: "manchester" };

console.log(personClone);

// sets
const nameArray = ["ryu", "chun-li", "ryu", "shaun"];
console.log(nameArray);

//const namesSet = new Set(['ryu','chun-li','shaun']);
//const namesSet = new Set(nameArray);
//console.log(namesSet);

//const uniqueNames = [...namesSet];
const uniqueNames = [...new Set(nameArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(25).add(30);
ages.add(25);
ages.delete(25);

console.log(ages, ages.size);
console.log(ages.has(30), ages.has(25));

ages.clear();
console.log(ages);

const ninjas = new Set([
  { name: "shaun", age: 30 },
  { name: "crystal", age: 29 },
  { name: "chun-li", age: 32 },
]);

ninjas.forEach((ninja) => {
  console.log(ninja.name, ninja.age);
});

//Symbols
const symbolOne = Symbol();
const symbolTwo = Symbol();

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne == symbolTwo);

const ninja = {};
ninja.age = 30;
ninja["belt"] = "orange";
ninja["belt"] = "black";

ninja[symbolOne] = "ryu";
ninja[symbolTwo] = "shaun";
console.log(ninja);
