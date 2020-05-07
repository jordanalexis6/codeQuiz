// variables
var startQ = document.getElementById("#startQuiz");
var myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
    },
    correctAnswer: "c",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
    },
    correctAnswer: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "d",
  },
];
var scoreboard = [];
var timerDisplay = [];
var correct = 0;
var incorrect = 0;
var question = "none";
var input = "none";
var answer = "none";

startQ.addEventListener("click", startQuizNow);
// start quiz // make the timer start and then ask first question

function startQuizNow() {
  if (true)
    randomQuestion =
      myQuestions[Math.floor(Math.random() * myQuestions.length)];
  //   timer = setInterval(timerDisplay, 75000); // 1000ms = 1s
}
document.body.getElementById("startQuiz").innerHTML =
  startQuizNow[randomQuestion];
// // if user is wrong take off 2 secs from time
// if user is right at 5 points
// var score = function () {
//   if (input == answer) {
//     correct = correct + 1;
//     alert("correct");
//   } else {
//     incorrect = incorrect + 1;
//     alert("incorrect");
//   }
// };

// keep score on top right with time going down

// display score with time up

// enter initial for highscores
