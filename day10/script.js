const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  //console.log("you clicked me");
  //ul.innerHTML += "<li>something new</li>";
  const li = document.createElement("li");
  li.textContent = "something new to do";
  ul.append(li);
  ul.prepend(li);
});

// ul.remove();

const items = document.querySelectorAll("li");
items.forEach((item) => {
  item.addEventListener("click", (e) => {
    //console.log("event in LI");
    // console.log("item clicked");
    console.log(e);
    //console.log(item);
    e.target.style.textDecoration = "line-through";
    //e.stopPropagation();
    //e.target.remove();
  });
});

ul.addEventListener("click", (e) => {
  //console.log("event in UL");
  //console.log(e);
  if (e.target.tagName === "LI") {
    // e.target.remove();
  }
});
