const para = document.querySelector("p");

//console.log(para.innerText);
//para.innerText = "ninja are awesome!";

const paras = document.querySelectorAll("p");
//const errors = document.querySelectorAll(".error");
// paras.forEach((para) => {
//   console.log(para.innerText);
//   para.innerText += "new text";
// });
//console.log(errors);

const content = document.querySelector(".content");
console.log(content.innerHTML);
content.innerHTML = "<h2>THIS IS A NEW H2</h2>";

const people = ["mario", "luigi", "yoshi"];

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});

// get an element by ID
const title = document.getElementById("page-title");
console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName("error");
console.log(errors);
console.log(errors[0]);

// get elements by their tag name

// const paras = document.getElementsByTagName("p");
// console.log(paras);
// console.log(paras[1]);
