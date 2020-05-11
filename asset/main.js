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

  //delete title

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
        document.getElementById("answers").innerHTML = "";
        currentQuestion++;
        displayQuestion();
      }
    });
    document.getElementById("answers").append(button);
  }
}
