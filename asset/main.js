// variables
var startQ = document.getElementById("start");
var title = document.getElementById("title");
var initials = document.getElementById("initials");
var quizCont = document.getElementById("quiz");
var instructions = document.getElementById("instructions");
var endGame = document.getElementById("endGame");
var timer = document.getElementById("timer");
var points = document.getElementById("points");
var questions = [
  {
    question: "What does JSON mean?",
    answers: [
      "JavaScript Object Notation",
      "JavaScript Operation Note",
      "Javascript Operation Notation",
    ],
    correctAnswer: "JavaScript Object Notation",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: ["<head>", "end of <body>", "Both <head> & <body> section"],
    correctAnswer: "Both <head> & <body> section",
  },
  {
    question:
      "What is a JavaScript element that represents either a true or false statement?",
    answers: ["True/False", "String", "Boolean", "concatenation"],
    correctAnswer: "Boolean",
  },
];
let currentQuestion = 0;
var timer = 75;
var scoreboard = 0;
var points = 0;
// start quiz // make the timer start // points display // delete start button & title
startQ.addEventListener("click", function () {
  var createTimer = setInterval(function () {
    // runs every secound
    timer--;
    // if timer runs out
    if (timer === 0) {
      clearInterval(createTimer);
      completeQuiz();
    }
    // update the timer on page
    document.getElementById("timer").innerHTML = timer + "seconds";
  }, 1000);
  // add the score to display on page
  document.getElementById("points").innerHTML = points + " " + "points";
  // delete start button
  start.parentNode.removeChild(start);
  //delete title
  title.parentNode.removeChild(title);
  // display first questions and answer
  displayQuestion();
});

function displayQuestion() {
  // displays first question
  document.getElementById("question").innerHTML =
    questions[currentQuestion].question;

  // creating buttons
  for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
    var button = document.createElement("button");
    button.innerText = questions[currentQuestion].answers[i];
    button.value = i;
    button.addEventListener("click", function (event) {
      // if answer is incorrect
      if (
        event.target.value !== questions[currentQuestion].correctAnswer.value
      ) {
        timer -= 10;
      } else {
        // answer is correct
        event.target.value === questions[currentQuestion].correctAnswer.value;
        points++;
        displayQuestion();
      }
      // the quiz is complete
      if (currentQuestion === questions.length - 1) {
        completeQuiz();
      } else {
        // increment the question and move onto the next
        document.getElementById("answers").innerHTML = "";
        currentQuestion++;
        displayQuestion();
      }
    });
    document.getElementById("answers").append(button);
  }
}
// save the score in localStorage
function completeQuiz() {
  instructions.setAttribute("class", "hide");
  quizCont.setAttribute("class", "hide");
  endGame.removeAttribute("class", "hide");
  initials.removeAttribute("class", "hide");
  initials;
  var scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.push({
    initials: initials,
    points: points,
  }); // save the player's score

  // save the scores back in localstorage
  localStorage.setItem("scores", JSON.stringify(scores));
  // display the scoreboard
}
