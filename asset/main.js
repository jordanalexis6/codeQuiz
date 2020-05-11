// variables
var startQ = document.getElementById("start");
var title = document.getElementById("title");
var initials = document.getElementById("initials");
var questions = [
  {
    question: "What does JSON mean?",
    answers: [
      "JavaScript Object Notation",
      "JavaScript Operation Note",
      "Javascript Operation Notation",
    ],
    correctAnswer: 0,
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: ["<head>", "end of <body>", "Both <head> & <body> section"],
    correctAnswer: 0,
  },
  {
    question:
      "What is a JavaScript element that represents either a true or false statement?",
    answers: ["True/False", "String", "Boolean", "concatenation"],
    correctAnswer: 2,
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
  document.getElementById("scoreboard").innerHTML = points + " " + "points";
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
        points = score++;
        displayQuestion();
      }
      // the quiz is complete
      if (currentQuestion === questions.length - 1) {
        completeQuiz();
      } else {
        // increment the question and move onto the next
        document.getElementById("answers").innerHTML = " ";
        currentQuestion++;
        displayQuestion();
      }
    });
    document.getElementById("answers").append(button);
  }
}
// save the score in localStorage
function completeQuiz() {
  var initials;
  var scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.push({
    initials: initials,
    points: points,
  }); // save the player's score

  // save the scores back in localstorage
  localStorage.setItem("scores", JSON.stringify(scores));
  // display the scoreboard
}
