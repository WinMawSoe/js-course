import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1jw-YJNQN1KUd7YzeDrArQVqjcROpC6I",
  authDomain: "fir-9-dojo-ecb41.firebaseapp.com",
  projectId: "fir-9-dojo-ecb41",
  storageBucket: "fir-9-dojo-ecb41.appspot.com",
  messagingSenderId: "494239176925",
  appId: "1:494239176925:web:e5ec2081a765096d31e334",
};

// init firebase app
console.log(initializeApp(firebaseConfig));

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "books");

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    console.log(snapshot.docs);
    let books = [];

    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });

    console.log(books);
  })
  .catch((err) => console.log(err.message));
