// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// console.log(auth);
let formContainer = document.getElementById("container");
let userEmail = document.getElementById("useremail");
let password = document.getElementById("password");
let form = document.getElementById("login");
let signUpForm = document.getElementById("signup");
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let email = document.getElementById("email");
let signUpPassword = document.getElementById("signuppass");
let confirmPass = document.getElementById("confirmpassword");
let showForm = document.querySelector(".sign-up-form");

onAuthStateChanged(auth, (user) => {
  if (user || firstName) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    console.log(user, "logged in");
    const uid = user.uid;
  } else {
    console.log("user not logged in");
    // User is signed out
    // ...
  }
});

form.addEventListener("submit", function(e) {
  e.preventDefault();
  signInAuth();
});
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  signUpFormValues();
});
function signInAuth() {
  let email = userEmail.value;
  let password_val = password.value;
  if (!email || !password_val) {
    alert("Your email or password cannot be empty.");
  } else {
    signInWithEmailAndPassword(auth, email, password_val)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Sign in successfully");
        location.replace("./login.html");
      })
      .catch((error) => {
        alert("invalid email or password");
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
}

const googleHandler = async () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("Google sign-in successful:", user);
      alert("Sign in with Google successful");
      // Redirect or take any other action here
      location.replace("./login.html");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error during Google sign-in:", errorMessage);
      alert("Error during Google sign-in: " + errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

window.googleHandler = googleHandler;

document.getElementById("Facebook").addEventListener("click", async () => {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("facebook sign-in successful:", user);
      alert("Sign in with facebook successful");
      // Redirect or take any other action here
      location.replace("./login.html");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error during facebook sign-in:", errorMessage);
      alert("Error during facebook sign-in: " + errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
    });
});

document.getElementById("github-auth").addEventListener(
  "click",
   async () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log("github sign-in successful:", user);
      alert("Sign in with github successful");
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error during github sign-in:", errorMessage);
      alert("Error during github sign-in: " + errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    })
  });

function signUpFormValues() {
  let email_val = email.value;
  let signUpPassVal = signUpPassword.value;
  let confirmpassVal = confirmPass.value;
  let firstNameVal = firstName.value;
  let lastNameVal = lastName.value;
  let lowerRegex = /[a-z]/;
  let upperRegex = /[A-Z]/;
  let numRegex = /[0-9]/;
  let specialChar = /[!"#$%&'()*+,-/:;<=>?@[\]^_`{|}~]/;
  if (signUpPassVal.length < 8 || signUpPassVal.length > 20) {
    alert("Password must be 8 to 20 characters.");
  } else if (/^\d/.test(signUpPassVal)) {
    alert("Password cannot start with a number.");
  } else if (/\s|\./.test(signUpPassVal)) {
    alert("Password cannot contain spaces or dots.");
  } else if (!lowerRegex.test(signUpPassVal)) {
    alert("Password must contain at least one lowercase letter.");
  } else if (!upperRegex.test(signUpPassVal)) {
    alert("Password must contain at least one uppercase letter.");
  } else if (!numRegex.test(signUpPassVal)) {
    alert("Password must contain at least one number.");
  } else if (!specialChar.test(signUpPassVal)) {
    alert("Password must contain at least one special character.");
  } else if (signUpPassVal !== confirmpassVal) {
    alert("Confirm password doesn't match.");
  } else {
    alert("Congratulations! Your account has been created successfully.");
    createUserWithEmailAndPassword(auth, email_val, signUpPassVal)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        // Update user profile with the username
        updateProfile(user, {
          displayName: `${firstNameVal} ${lastNameVal}`,
        })
          .then(() => {
            console.log("Profile updated successfully");
          })
          .catch((error) => {
            console.error("Error updating profile: ", error);
          });

        signUpForm.style.display = "none";
        formContainer.style.display = "flex";
        resetValues();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
}

function resetValues() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  signUpPassword.value = "";
  confirmPass.value = "";
}

showForm.addEventListener("click", showSignUpForm);

function showSignUpForm() {
  signUpForm.style.display = " unset";
  formContainer.style.display = "none";
}

function showPassVal(ele, targetId) {
  let passInp = document.getElementById(targetId);
  if (passInp.type === "password") {
    passInp.type = "text";
    ele.className = "fa-solid fa-eye-slash";
  } else {
    passInp.type = "password";
    ele.className = "fa-solid fa-eye";
  }
}

window.showPassVal = showPassVal; // Attach the function to the window object
