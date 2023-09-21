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
    // console.log("User answered question correctly");
    alert("You answered the question correct");
    score++;
  } else {
    // console.log("User answered question incorrectly");
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
    // console.log("User answered question correctly");
    alert("You answered the question correct");
    score++;
  } else {
    // console.log("User answered question incorrectly");
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
    // console.log("User answered question correctly");
    alert("You answered the question correct");
    score++;
  } else {
    // console.log("User answered question incorrectly");
    alert("You answered the question incorrectly");
  }

  let ageQuestion = prompt("Is it true I am 12 years old?").toLowerCase();

  while (ageQuestion !== "yes" && ageQuestion !== "no") {
    alert("Please answer yes or no");
    ageQuestion = prompt("Is it true I am 12 years old?");
  }

  if (ageQuestion === "no") {
    // console.log("User answered question correctly");
    alert("You answered the question correct");
    score++;
  } else {
    // console.log("User answered question incorrectly");
    alert("You answered the question incorrectly");
  }

  let musicQuestion = prompt(
    "Have I recently listened to 'Where I'm Meant To Be' by Ezra Collective?"
  ).toLowerCase();

  while (musicQuestion !== "yes" && musicQuestion !== "no") {
    alert("Please answer yes or no");
    musicQuestion = prompt(
      "Have I recently listened to 'Where I'm Meant To Be' by Ezra Collective?"
    );
  }

  if (musicQuestion === "yes") {
    // console.log("User answered question correctly");
    alert("You answered the question correct");
    score++;
  } else {
    // console.log("User answered question incorrectly");
    alert("You answered the question incorrectly");
  }

  alert("You have completed the quiz!");

  alert("Well done, you answered " + score + " out of 5 correct!");
}

function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

function numberGuess() {
  let correctAnswer = 6;

  for (i = 0; i < 4; i++) {
    console.log("loop couter");
    let userGuess = prompt(
      "Guess a number between 1 and 10, you have four attempts"
    );
    if (parseInt(userGuess) === correctAnswer) {
      alert("Well done! That's correct!");
      break;
    } else if (userGuess < correctAnswer) {
      alert("That number is too low, try again");
    } else {
      alert("That number is too high, try again");
    }
  }

  if (i === 4) {
    alert("Sorry you're not a winner. 👏 👏 👏 ");
    alert("The correct answer was 7.");
  }
}

function foodGuess() {
  let correctAnswers = ["cheesecake", "apple pie", "chocolate brownie"];

  for (i = 6; i > 0; i--) {
    let userAnswer = prompt(
      `What are my favourite desserts? You have ${i} attempts.`
    ).toLowerCase();
    if (correctAnswers.indexOf(userAnswer) === -1) {
      console.log("loop couter");
      alert("Nope, it's not that. Try again!");
    } else {
      alert("Yes, correct. I love " + userAnswer + ".");
      break;
    }
  }
}

window.onscroll = function () {
  if (scrollY <= 310) {
    document.getElementById("showHideButton").style.display = "none";
  } else if (scrollY > 310) {
    document.getElementById("showHideButton").style.display = "block";
  }
};
