import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
import {
  getFirestore,
  collection,
  getDocs,
  Timestamp,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
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
const form = document.querySelector("form");
const button = document.querySelector("button.subscribe");

const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `
    <li data-id="${id}">
      <div>${recipe.title}</div>
      <div>${time}</div>
      <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
     `;
  list.innerHTML += html;
};

const removeRecipe = (id) => {
  const recipes = document.querySelectorAll("li");
  recipes.forEach((recipe) => {
    if (recipe.getAttribute("data-id") === id) {
      recipe.remove();
    }
  });
};

// (await getDocs(collection(db, "recipes"))).docs.map((doc) => {
//   addRecipe(doc.data(), doc.id);
// });

const unsub = await onSnapshot(
  collection(db, "recipes"),
  (snapshot) => {
    // console.log(snapshot.docChanges());
    snapshot.docChanges().forEach((change) => {
      const doc = change.doc;
      if (change.type === "added") {
        addRecipe(doc.data(), doc.id);
      } else if (change.type === "removed") {
        removeRecipe(doc.id);
      }
    });
  },
  (error) => {
    // ...
  }
);

// add document
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: Timestamp.fromDate(now), //firebaseConfig.firestore.Timestamp.fromDate(now),
  };

  console.log(recipe);

  await setDoc(doc(db, "recipes", Date.now().toString()), recipe);

  // collection(db, "recipes")
  //   .add(recipe)
  //   .then(() => {
  //     console.log("recipe added");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});

list.addEventListener("click", async (e) => {
  // console.log(e);

  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.getAttribute("data-id");
    console.log(id);
    await deleteDoc(doc(db, "recipes", id));
  }
});

button.addEventListener("click", async (e) => {
  unsub();
});
