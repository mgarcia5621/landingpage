// let age = prompt("Hello! How old are you!");

// if (Number(age) < 18) {
//   alert("Sorry! you're too young too drive...Powering off");
// } else if (Number(age) > 18) {
//   alert("Welcome! Powering on, Drive safe!");
// } else if (Number(age) === 18) {
//   alert("Congratulations on your first year of driving! Be Safe!");
// }

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// array.shift("Banana");
// array.sort();
// array.push(["Kiwi"]);
// array.shift();
// array.reverse();
// console.log(array);

// function isUserValid(username, password) {
//   for (var i = 0; i < database.length; i++) {
//     if (
//       database[i].username === username &&
//       database[i].password === password
//     ) {
//       return true;
//     }
//   }
//   return false;
// }

// var userNamePrompt = prompt("What's your username?");
// var passwordPrompt = prompt("What's your password?");
// signIn(userNamePrompt, passwordPrompt);

// var todo = [
//   "clean room",
//   "brush teeth",
//   "exercise",
//   "study javascript",
//   "eat healthy",
// ];
// var todoLength = todo.length;

// for (var i = 0; i < todoLength; i++) {
//   todo.pop();
// }

// var counterOne = 10;
// while (counterOne > 0) {
//   console.log(counterOne);
//   counterOne++;
// }

// function myFunction(x) {
//   x.classList.toggle("change");
// }

// let signIn = document.getElementById("sign-in");

// function myFunction(x) {
//   x.classList.toggle("change");
// }

// let closeNav = document.getElementById("mySideNav").style;

// function showNav() {
//   document.getElementById("sign-in").addEventListener("click, ");
// }

// document.getElementById("myBtn").addEventListener("click", displayDate);

// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }

// document.getElementById("darkmode").addEventListener("click", function () {
//   alert("Hello Dark Mode");
//   console.log("clicked");
// });

// Toggle between showing and hiding the sidebar when clicking the menu icon

function toggleSideNav(clickedElemnt) {
  clickedElemnt.classList.toggle("change");
  document.getElementById("mySideNav").classList.toggle("show-nav");
  document.querySelector(".overlay").classList.toggle("show");
  document.getElementById("mySideNav").classList.toggle("hide-nav");
  document.body.classList.toggle("no-scroll");
}
