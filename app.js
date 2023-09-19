function greeting() {
  let userName = prompt("What is your name?");
  document.write("Hello " + userName + ", welcome.");
}

function quiz() {
  let score = 0;

  let locationQuestion = confirm("Is it true I live in Oxfordshire?");

  if (locationQuestion === true) {
    console.log("user is correct");
    score++;
  } else {
    console.log("user is false");
  }

  let workQuestion = confirm("Is it true that I have worked as a pilot?");

  if (workQuestion === false) {
    console.log("user is correct");
    score++;
  } else {
    console.log("user is false");
  }

  let filmQuestion = confirm("Have I recently watched Asteroid City?");

  if (filmQuestion === true) {
    console.log("user is correct");
    score++;
  } else {
    console.log("user is false");
  }

  let ageQuestion = confirm("Is it true I am 12 years old?");

  if (ageQuestion === false) {
    console.log("user is correct");
    score++;
  } else {
    console.log("user is false");
  }

  let musicQuestion = confirm(
    "Have I recently listened to 'Where I'm Meant To Be' by Ezra Collective ?"
  );

  if (musicQuestion === true) {
    console.log("user is correct");
    score++;
  } else {
    console.log("user is false");
  }

  alert("You have completed the quiz!");

  alert("Well done, you answered " + score + " out of 5 correct!");
}

// function darkMode() {
//   document.body.style.backgroundColor = "black";
//   document.body.style.color = "white";
// }

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
