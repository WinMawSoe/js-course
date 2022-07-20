import { styleBody, addTitle, contact } from "./dom";
import users, { getPremUser } from "./data";

let premUser = getPremUser(users);
console.log(users, premUser);

console.log("test 2");
