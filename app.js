let formContainer = document.getElementById("container");
let userEmail = document.getElementById("useremail");
let password = document.getElementById("password");
let form = document.getElementById("login");
let signUpForm = document.getElementById("signup");
let email = document.getElementById("email");
let signUpPassword = document.getElementById("signuppass");
let confirmPass = document.getElementById("confirmpassword");

signUpForm.style.display = "none";

form.addEventListener("submit", function(e) {
  e.preventDefault();
  getData(user_email, user_password);
});

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  signUpFormValues();
});

function getData(user_email, userPassword) {
  let user = userEmail.value;
  let pass = password.value;
  if (user === "" || pass === "") {
    alert("Your email or password cannot be empty.");
  } else if (user_email === undefined || user_password === undefined) {
    alert("Your Email password cannot match");
  } else if (!user_email.includes(user)) {
    alert("Email Doesn't Match");
  } else if (!userPassword.includes(pass)) {
    alert("password doesn't match");
  } else {
    alert("sign in successfully");
    form.submit();
    localStorage.setItem("Email", user);
    localStorage.setItem("Password", pass);
    location.assign(
      "https://muhammad-akasha.github.io/mobile-specifications-cards./"
    );
    user = "";
    pass = "";
  }
}

let userData = [
  {
    firstName: [],
    lastName: [],
    email: [],
    password: [],
  },
];
let user_email;
let user_password;

function signUpFormValues() {
  user_email = userData[0].email;
  user_password = userData[0].password;
  let emailVal = email.value;
  let signUpPassVal = signUpPassword.value;
  let confirmpassVal = confirmPass.value;

  let lowerRegex = /[a-z]/;
  let upperRegex = /[A-Z]/;
  let numRegex = /[0-9]/;
  let specialChar = /[!"#$%&'()*+,-/:;<=>?@[\]^_`{|}~]/;
  if (signUpPassVal.length <= 8 || signUpPassVal.length >= 20) {
    alert("password must be 8 to 20 character");
  } else if (!isNaN(signUpPassVal.charAt(0))) {
    alert("password cannot start with number");
  } else if (
    signUpPassVal.indexOf(" ") !== -1 ||
    signUpPassVal.indexOf(".") !== -1
  ) {
    alert("password cannot contain spaces and dots");
  } else if (!lowerRegex.test(signUpPassVal)) {
    alert("password contain atleast one lower case");
  } else if (!upperRegex.test(signUpPassVal)) {
    alert("password contain atleast one Upper case");
  } else if (!numRegex.test(signUpPassVal)) {
    alert("password contain atleast one number case");
  } else if (!signUpPassVal.match(specialChar)) {
    alert("Password Must Have Atleast One Special Character");
  } else if (signUpPassVal !== confirmpassVal) {
    alert("confirm password doesn't match");
  } else {
    alert("Congratulation! Your Account has been Created SuccessFully");
    console.log(emailVal, signUpPassVal, confirmpassVal);
    signUpForm.style.display = "none";
    formContainer.style.display = "flex";
    userData.forEach((user) => {
      user.firstName.push(firstName.value);
      user.lastName.push(lastName.value);
      user.email.push(emailVal);
      user.password.push(signUpPassVal);
      resetValues();
    });
  }
}

function resetValues() {
  let firstName = document.getElementById("firstname");
  let lastName = document.getElementById("lastname");
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  signUpPassword.value = "";
  confirmPass.value = "";
}

function showSignUpForm() {
  signUpForm.style.display = "block";
  formContainer.style.display = "none";
}
