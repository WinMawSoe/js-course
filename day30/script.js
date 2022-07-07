import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCyTkT9XchCFDutAARWMgk3bwJRXb-1jiY",
  authDomain: "udemy-modern-javascript-f90d0.firebaseapp.com",
  projectId: "udemy-modern-javascript-f90d0",
  storageBucket: "udemy-modern-javascript-f90d0.appspot.com",
  messagingSenderId: "1088266677758",
  appId: "1:1088266677758:web:858dc517de5faf492364af",
  measurementId: "G-23RDTPPE2N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

const list = document.querySelector("ul");
const addRecipe = (recipe) => {
  let time = recipe.created_at.toDate();
  let html = `
    <li>
      <div>${recipe.title}</div>
      <div>${time}</div>
    </li>
     `;
  list.innerHTML += html;
};

(await getDocs(collection(db, "recipes"))).docs.map((doc) => {
  doc.data();
  console.log(doc.data());
  addRecipe(doc.data());
});

// collection(db, "recipes")
//   .get()
//   .then((snapshot) => {
//     // when we have data
//     snapshot.docs.forEach((doc) => {
//       console.log(doc.data);
//       addRecipe(doc.data());
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
