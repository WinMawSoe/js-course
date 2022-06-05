// logical NOT(!)

let user = false;

if (!user) {
  console.log("you must be logged in to continue ");
}
console.log(!true);
console.log(!false);

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 40];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }
  console.log("your score:", scores[i]);

  if (scores[i] === 100) {
    console.log("congrats, you got the top score");
    break;
  }
}

// switch statements
const grade = "50";

switch (grade) {
  case "50":
    console.log("you got an A");
    break;
  case "B":
    console.log("you got an B");
    break;
  case "C":
    console.log("you got an C");
    break;
  case "D":
    console.log("you got an D");
    break;
  case "E":
    console.log("you got an E");
    break;
  default:
    console.log("not a valid grade");
}

//variables & block scope
let age = 30;
if (true) {
  let age = 40;
  let name = "khin";
  console.log("inside 1st code block: ", age, name);

  if (true) {
    let age = 50;
    console.log("inside 2nd code block: ", age);
  }
}
console.log("outside code block: ", age, name);

//function expression & arguments and parameters
const speak = function (name = "Luigi", time = "Night") {
  console.log(`Good ${time} ${name}`);
};

speak();
speak("Shaun");

//function declaration
function greet() {
  console.log("hello welcome");
}
