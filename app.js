let userName = document.getElementById("username");
let password = document.getElementById("password");
let form = document.getElementById("login");

console.log(userName, password);
form.addEventListener("submit", function(e) {
  e.preventDefault();
});

function getData() {
  let user = userName.value;
  let pass = password.value;
  let lowerRegex = /[a-z]/;
  let upperRegex = /[A-Z]/;
  let numRegex = /[0-9]/;
  let specialChar = /[!"#$%&'()*+,-/:;<=>?@[\]^_`{|}~]/;
  if (pass.length <= 8 || password.length >= 20) {
    alert("password must be 8 to 20 character");
  } else if (pass.charAt(0) >= 0 || pass.charAt <= 9) {
    alert("password cannot start with number");
  } else if (pass.indexOf(" ") !== -1 || pass.indexOf(".") !== -1) {
    alert("password cannot contain spaces and dots");
  } else if (!lowerRegex.test(pass)) {
    alert("password contain atleast one lower case");
  } else if (!upperRegex.test(pass)) {
    alert("password contain atleast one Upper case");
  } else if (!numRegex.test(pass)) {
    alert("password contain atleast one number case");
  } else if (!pass.match(specialChar)) {
    alert("Password Must Have Atleast One Special Character");
  }else {
      alert("Your Detail has Been Saved in LocalStorage");
      form.submit();
      localStorage.setItem("User Name" , user);
      localStorage.setItem("User Password" , pass);
      location.assign("https://66640ec324ce83a36749f7f9--stunning-frangipane-da25d2.netlify.app/")
  }
}
