// variables
var startQ = document.getElementById("start");
var title = document.getElementById("title");
var questions = [
  {
    question: "Who invented JavaScript?",
    answers: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
    correctAnswer: 2,
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: ["Node.js", "TypeScript", "npm"],
    correctAnswer: 2,
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: ["Angular", "jQuery", "RequireJS", "ESLint"],
    correctAnswer: 3,
  },
];
let currentQuestion = 0;
var timer = 75;
var score = 0;
// var start = document.getElementById("startQuiz");
// start quiz // make the timer start and then ask first question
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

  // delete start button

  //todo: delete title

  // display first questions and answer
  displayQuestion();
});

// displays first question
function displayQuestion() {
  document.getElementById("question").innerHTML =
    questions[currentQuestion].question;
}

// creating buttons

// if answer is incorrect

// answer is correct

// the quiz is complete

// increment the question and move onto the next

// save the score in localStorage

// save the player's score

// save the scores back in localstorage

// display the scoreboard
