// variables
var startQ = document.getElementById("start");
var title = document.getElementById("title");
var initials = document.getElementById("initials");
var quizCont = document.getElementById("quiz");
var instructions = document.getElementById("instructions");
var endGame = document.getElementById("endGame");
var questions = [
  {
    question: "Which answer is NOT considered a primary data type in JS?",
    answers: ["Number", "Object", "Boolean", "String"],
    correctAnswer: 1,
  },
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
    question: "Which answer is NOT a JS operator?",
    answers: ["=", "//", "*", "++", "/", "%", "**"],
    correctAnswer: 1,
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: ["<head>", "End of <body>", "Both <head> & <body> section"],
    correctAnswer: 2,
  },
  {
    question: "Which answer is NOT considered a special data type in JS?",
    answers: ["Array", "Undefined", "Null"],
    correctAnswer: 0,
  },
  {
    question:
      "What is a JavaScript element that represents either a true or false statement?",
    answers: ["True/False", "String", "Boolean", "Concatenation"],
    correctAnswer: 2,
  },

  {
    question: "How do you increase a number by one in JS?",
    answers: ["Add", "Increment", "Increase", "Amplify"],
    correctAnswer: 1,
  },
  {
    question: "What is NOT a way to create a pop-up in JS?",
    answers: ["Prompt", "Alert", "Confirm", "Surprise"],
    correctAnswer: 3,
  },
  {
    question: "What does concatenate mean?",
    answers: [
      "Targets an element in HTML",
      "Combines two variables",
      "Combines two strings",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which answer is NOT considered a composite data type in JS?",
    answers: ["Object", "Null", "Array"],
    correctAnswer: 1,
  },
  {
    question:
      "What is the default behavior called that is used to move declarations to the top the current scope?",
    answers: ["Arranging", "Sorting", "Jumping", "Hoisting"],
    correctAnswer: 3,
  },
  {
    question: "Which answer is NOT a kind of loop in JS?",
    answers: ["for/in", "do/while", "while", "for/while", "for/of"],
    correctAnswer: 3,
  },
  {
    question: "How do you decrease a number by one in JS?",
    answers: ["Subtract", "Decrease", "Minus", "Decrement"],
    correctAnswer: 3,
  },
  {
    question:
      "What kind of statment is used to execute actions based on a trigger or condition?",
    answers: [
      "Boolean Variable",
      "Conditional Statement",
      "Fired Event",
      "Default Behaivor",
    ],
    correctAnswer: 1,
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
