// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut, 

} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyC9q3625-DFPqHRJEGv2C-oit1RWzLuGOw",
  authDomain: "my-first-pro-8fe9f.firebaseapp.com",
  projectId: "my-first-pro-8fe9f",
  storageBucket: "my-first-pro-8fe9f.appspot.com",
  messagingSenderId: "930089270355",
  appId: "1:930089270355:web:b3f12e279c58c3f8dd1aa6",
  measurementId: "G-J4F07VXLLP",
};


let userName = document.querySelector(".navbar-brand");
console.log(userName , "=========>")
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    console.log(user, "logged in");
    const uid = user.uid;
    const displayName = user.displayName;
    userName.innerText = `Welcome to the page ${displayName}`
  } else {
    console.log("user not logged in");
    // User is signed out
    // ...
  }
});

function logOut() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      window.location.replace("./../index.html");
    })
    .catch((error) => {
      console.log(error);
    });
}

window.logOut = logOut;
