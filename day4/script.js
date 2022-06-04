// for loops

for (let i = 0; i < 5; i++) {
  console.log("in loop", i);
}

console.log("loop finished");

const names = ["Khin", "Nyein", "Pyae"];

for (let i = 0; i < names.length; i++) {
  //console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

//while loop

let i = 0;
while (i < 5) {
  console.log("in loop", i);
  i++;
}

//do while loops

let h = 4;

do {
  console.log("val of i is:", h);
  h++;
} while (h < 5);

//if statements and logical operators - OR || AND &&

// const age = 25;

// if (age > 23) {
//   console.log("you are over 25 years old");
// }

const password = "p@ssword251018";

if (password.length >= 12 && password.includes("@")) {
  console.log("that password is mighty strong");
} else if (
  password.length >= 8 ||
  (password.includes("@") && password.length >= 5)
) {
  console.log("that password is strong enough!");
} else {
  console.log("password is not strong enough");
}
