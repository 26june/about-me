function greeting() {
  let userName = prompt("What is your name?");
  document.write("Hello " + userName + ", welcome.");
}

function quiz() {
  let score = 0;

  let locationQuestion = prompt(
    "Is it true I live in Oxfordshire?"
  ).toLowerCase();

  while (locationQuestion !== "yes" && locationQuestion !== "no") {
    alert("Please answer yes or no");
    locationQuestion = prompt("Is it true I live in Oxfordshire?");
  }

  if (locationQuestion === "yes") {
    console.log("User answered question correctly");
    alert("You answered the question correct");
    score++;
  } else {
    console.log("User answered question incorrectly");
    alert("You answered the question incorrectly");
  }

  let workQuestion = prompt(
    "Is it true that I have worked as a pilot?"
  ).toLowerCase();

  while (workQuestion !== "yes" && workQuestion !== "no") {
    alert("Please answer yes or no");
    workQuestion = prompt("Is it true that I have worked as a pilot?");
  }

  if (workQuestion === "no") {
    console.log("User answered question correctly");
    alert("You answered the question correct");
    score++;
  } else {
    console.log("User answered question incorrectly");
    alert("You answered the question incorrectly");
  }

  let filmQuestion = prompt(
    "Have I recently watched Asteroid City?"
  ).toLowerCase();

  while (filmQuestion !== "yes" && filmQuestion !== "no") {
    alert("Please answer yes or no");
    filmQuestion = prompt("Have I recently watched Asteroid City?");
  }

  if (filmQuestion === "yes") {
    console.log("User answered question correctly");
    alert("You answered the question correct");
    score++;
  } else {
    console.log("User answered question incorrectly");
    alert("You answered the question incorrectly");
  }

  let ageQuestion = prompt("Is it true I am 12 years old?").toLowerCase();

  while (ageQuestion !== "yes" && ageQuestion !== "no") {
    alert("Please answer yes or no");
    ageQuestion = prompt("Is it true I am 12 years old?");
  }

  if (ageQuestion === "no") {
    console.log("User answered question correctly");
    alert("You answered the question correct");
    score++;
  } else {
    console.log("User answered question incorrectly");
    alert("You answered the question incorrectly");
  }

  let musicQuestion = prompt(
    "Have I recently listened to 'Where I'm Meant To Be' by Ezra Collective?"
  ).toLowerCase();

  while (musicQuestion !== "yes" && musicQuestion !== "no") {
    alert("Please answer yes or no");
    musicuestion = prompt(
      "Have I recently listened to 'Where I'm Meant To Be' by Ezra Collective?"
    );
  }

  if (musicQuestion === "yes") {
    console.log("User answered question correctly");
    alert("You answered the question correct");
    score++;
  } else {
    console.log("User answered question incorrectly");
    alert("You answered the question incorrectly");
  }

  alert("You have completed the quiz!");

  alert("Well done, you answered " + score + " out of 5 correct!");
}

// function darkMode() {
//   document.body.style.backgroundColor = "black";
//   document.body.style.color = "white";
// }

function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}
