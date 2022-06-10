// getting & setting attributes
const header = document.querySelector("h1");
header.style.color = "crimson";

// console.log(content.classList);
// content.classList.add("error");
// content.classList.remove("error");
// content.classList.add("success");
// link.setAttribute("href", "https://www.thenetninja.co.uk");
// link.innerText = "TheNet Ninja Website";

const mssg = document.querySelector("p.last-msg");
console.log(mssg.getAttribute("class"));
mssg.setAttribute("class", "success");
mssg.setAttribute("style", "color:purple");

// changing CSS styles
const title = document.querySelector("h2");
title.setAttribute("style", "margin: 50px;");
console.log(title.style);
console.log(title.style.color);

// title.style.margin = "50px";

title.style.fontSize = "30px";
// title.style.margin = "";

const paras = document.querySelectorAll("p");

paras.forEach((p) => {
  if (p.textContent.includes("error")) {
    p.classList.add("error");
  }
  if (p.innerText.includes("success")) {
    p.classList.add("success");
  }
});

const article = document.querySelector("article");

// title.classList.toggle("test");
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

// changing
console.log(title.nextElementSibling.parentElement.children);

// console.log(article.children);
// console.log(Array.from(article.children));
// console.log(article.children);
// Array.from(article.children).forEach((child) => {
//   child.classList.add("article-element");
// });
