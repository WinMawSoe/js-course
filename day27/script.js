class User {
  constructer(username, email) {
    // set up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}
const userOne = new User("mario", "mario@thenetninja.co.uk");
const userTwo = new User("luigi", "luigi@thenetninja.co.uk");

console.log(userOne, userTwo);

userOne.login().incScore().incScore().logout();

// const userOne = {
//   username: "ryu",
//   email: "ryu@thenetninja.co.uk",
//   login() {
//     console.log("the user logged in");
//   },
//   logout() {
//     console.log("the user logged out");
//   },
// };
// console.log(userOne.email, userOne.username);
// userOne.login();

// const userTwo = {
//   username: "chun li",
//   email: "chun.li@thenetninja.co.uk",
//   login() {
//     console.log("the user logged in");
//   },
//   logout() {
//     console.log("the user logged out");
//   },
// };
// console.log(userTwo.email, userTwo.username);
// userTwo.login();

// const userThree = new User("shaun@thenetninja.co.uk", 'shaun');
