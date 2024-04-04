const questions = [
  {
    question: "Which is larget animal in the world?",
    answers: [
      { text: "Whale Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Great White Shark", correct: false },
    ],
  },
  {
    question: "Which is the largest country in the world?",
    answers: [
      { text: "Russia", correct: true },
      { text: "China", correct: false },
      { text: "United States of America", correct: false },
      { text: "Canada", correct: false },
    ],
  },
  {
    question: "What is Prince Harry’s official first name?",
    answers: [
      { text: "Harry", correct: false },
      { text: "Henry", correct: true },
      { text: "Harriet", correct: false },
      { text: "Harold", correct: false },
    ],
  },
  {
    question:
      "What 1997 movie features Will Smith and Tommy Lee Jones as undercover secret agents who police extraterrestrials?",
    answers: [
      { text: "(Independence Day", correct: false },
      { text: "Men in Black", correct: true },
      { text: "E.T.", correct: false },
      { text: "Aliens", correct: false },
    ],
  },
];

const questionElement = document.getElementById("questions");
const optionBtn = document.getElementById("option-button");
const lockBtn = document.getElementById("lock");

let curentIndex = 0; //store question index
let score = 0; //store the score

const start = () => {
  //start
  currentIndex = 0; //set the current index to 0
  score = 0; //start
  lockBtn.innerHTML = "Lock";
  showNextQuestion();
};

const showNextQuestion = () => {
  let currentQuestion = questions[currentIndex];
  let questionNum = currentIndex + 1;
  questionElement.innerHTML = questionNum + ". " + currentQuestion.question;
};
