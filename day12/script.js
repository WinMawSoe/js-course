const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,}$/;
//const username = document.querySelector('#username');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // validation

  const username = form.username.value;

  if (usernamePattern.test(username)) {
    // feedback good info
    feedback.textContent = "that username is valid!";
  } else {
    // feedback help info
    feedback.textContent =
      "username must contain letters only & be between 6 to 12 characters long";
  }
});

// live feedback

form.username.addEventListener("keyup", (e) => {
  //console.log(e);
  //console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    console.log("passed");
    form.username.setAttribute("class", "success");
  } else {
    console.log("failed");
    form.username.setAttribute("class", "error");
  }
});

// testing RegEx
// const username = '3434shunp123';
// const pattern = /^[a-z]{6,}$/

// let result = pattern.test(username);

// if(result){
//     console.log('regex test passed :)');
// }else {
//     console.log('regex test failed :(')
// }

// let result = username.search(pattern);
// console.log(result);
