// let age = prompt('Hello! How old are you!');

// if (Number(age) < 18) {
//     alert('Sorry! you\'re too young too drive...Powering off')
// } else if(Number(age) > 18) {
//     alert('Welcome! Powering on, Drive safe!');
// } else if (Number(age) === 18 ) {
//     alert('Congratulations on your first year of driving! Be Safe!')
// }


// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// array.shift("Banana")
// array.sort()
// array.push(["Kiwi"])
// array.shift()
// array.reverse()
// console.log(array)




// function isUserValid(username, password) {
//     for (var i=0; i < database.length; i++) {
//         if (database[i].username === username &&
//             database[i].password === password) {
//                 return true;
//             }
//     }
//     return false;
// }




//         }
// var userNamePrompt = prompt("What's your username?");
// var passwordPrompt = prompt("What's your password?");
// signIn(userNamePrompt, passwordPrompt)

// var todo = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy"
// ];
// var todoLength = todo.length;

// // for(var i=0; i < todoLength; i++) {
// //     todo.pop()
// // }

// var counterOne = 10;
// while(counterOne > 0) {
//     console.log(counterOne);
//     counterOne++
// }

// function myFunction(x) {
//     x.classList.toggle("change");
//   }


// let signIn = document.getElementById("sign-in");

// function myFunction(x) {
//     x.classList.toggle("change");
//   }
  let index = 0; 

  function darkMode() {
      let colors = "#1f1f1f";
      const bodycolor = document.getElementsByTagName("body");
      bodycolor.style.backgroundImage = colors;
      if(bodycolor = '#1f1f1f') {
        bodycolor = '#ffffff'
      } else {
        bodycolor = colors[0]
      }
      console.log(bodycolor)
   
  }
  
  