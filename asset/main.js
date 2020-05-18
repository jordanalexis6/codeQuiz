// variables
var startQ = document.getElementById("start");
var title = document.getElementById("title");
var initials = document.getElementById("initials");
var quizCont = document.getElementById("quiz");
var instructions = document.getElementById("instructions");
var endGame = document.getElementById("endGame");
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
    correctAnswer: 2,
  },
  {
    question:
      "What is a JavaScript element that represents either a true or false statement?",
    answers: ["True/False", "String", "Boolean", "concatenation"],
    correctAnswer: 2,
  },

  {
    question: "How do you increase a number by one in JS?",
    answers: ["add", "increment", "increase", "amplify"],
    correctAnswer: 1,
  },
  {
    question: "What is NOT a way to create a pop-up in JS?",
    answers: ["prompt", "alert", "confirm", "surprise"],
    correctAnswer: 3,
  },
  {
    question: "How do you decrease a number by one in JS?",
    answers: ["subtract", "decrease", "minus", "decrement"],
    correctAnswer: 3,
  },
];
let currentQuestion = 0;
var timer = 75;
var scoreboard = 0;
var points = 0;
// start quiz // make the timer start // points display // delete start button & title
startQ.addEventListener("click", function () {
  startTimer();

  // add the score to display on page
  document.getElementById("points").innerHTML = points + " " + "points";
  // delete start button
  start.parentNode.removeChild(start);
  //delete title
  title.parentNode.removeChild(title);
  // display first questions and answer
  displayQuestion();
});

var createTimer;

function startTimer() {
  createTimer = setInterval(function () {
    // runs every secound
    timer--;
    // if timer runs out
    if (timer === 0) {
      clearInterval(createTimer);
      completeQuiz();
    }
    // update the timer on page
    document.getElementById("timer").innerHTML = timer + " " + "Seconds";
  }, 1000);
}
function displayQuestion() {
  // displays first question
  document.getElementById("points").innerHTML = points + " " + "Points";
  if (currentQuestion < questions.length) {
    document.getElementById("question").innerHTML =
      questions[currentQuestion].question;

    // creating buttons
    for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
      var button = document.createElement("button");
      button.innerText = questions[currentQuestion].answers[i];
      button.value = i;
      button.setAttribute("class", "btn-outline-dark");
      button.addEventListener("click", function (event) {
        if (event.target.value == questions[currentQuestion].correctAnswer) {
          points += 5;

          // increment the question and move onto the next
          document.getElementById("answers").innerHTML = "";
          currentQuestion++;
          displayQuestion();
        } else {
          timer -= 10;
          alert("Incorrect");
        }

        if (currentQuestion === questions.length) {
          clearInterval(createTimer);
          completeQuiz();
        }
      });
      document.getElementById("answers").append(button);
    }
  }
}

// save the score in localStorage
function completeQuiz() {
  instructions.setAttribute("class", "hide");
  quizCont.setAttribute("class", "hide");
  endGame.removeAttribute("class", "hide");
  initials.removeAttribute("class", "hide");
  var button = document.createElement("button");
  button.setAttribute("class", "btn-outline-dark");
  button.innerText = "Save Score";
  button.addEventListener("click", function (event) {
    var scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push({
      initials: document.getElementById("initials").value,
      points: points,
    });
    localStorage.setItem("scores", JSON.stringify(scores));

    initials.setAttribute("class", "hide");
    document.getElementById("scores").setAttribute("class", "hide");

    for (var i = 0; i < scores.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = scores[i].initials + " " + scores[i].points;
      document.getElementById("scoresList").append(li);
    }
    // restarts quiz when hit button
    var restartQ = document.getElementById("restartQuiz");
    restartQ.removeAttribute("class", "hide");
    restartQ.setAttribute("class", "btn-outline-dark");
    restartQ.addEventListener(
      "click",
      function (e) {
        location.reload();
      },
      false
    );
  });
  document.getElementById("scores").append(button);
}
