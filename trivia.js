

const initGame = () => {
  const root = document.getElementById("root");

  //create and append welcome message and button
  const welcome = document.createElement("div");
  welcome.id = "welcome";
  welcome.innerHTML = `<h1>Welcome to the Trivia</h1><button id="startGame">Play</button>`;
  root.appendChild(welcome);

  // hide game content
  document.querySelector(".game").style.display = "none";
  document.getElementById("questions").style.display = "none";
  document.getElementById("option-button").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("timer").style.display = "none";
//   document.getElementById("prize-earned").style.display = "none";

  //event listener to start game
  document.getElementById("startGame").addEventListener("click", startGame);
};

document.addEventListener("DOMContentLoaded", () => {
  initGame();
});

const startGame = () => {
  document.getElementById("questions").style.display = "block";
  document.getElementById("option-button").style.display = "block";
  document.getElementById("nextBtn").style.display = "block";
  document.getElementById("timer").style.display = "block";
//   document.getElementById("prize-earned").style.display = "block";

  // remove welcome screen
  const welcome = document.getElementById("welcome");
  welcome.remove();

  const prizeListContainer = document.getElementById("prize-list-container");
  const prizeList = document.createElement("ul");
  prizeList.id = "prize-list";

  for (let i = prizeMoneyList.length - 1; i >= 0; i--) {
    // for loop to reverse order of the prizemoney array
    const listItem = document.createElement("li");
    listItem.textContent = prizeMoneyList[i];
    prizeList.appendChild(listItem);
  }

  // Append prize list to container
  prizeListContainer.appendChild(prizeList);

  // display game content
  document.querySelector(".game").style.display = "block";

  start();
};
const prizeMoneyList = [
  "$100",
  "$200",
  "$300",
  "$500",
  "$1,000", 
  "$2,000",
  "$4,000",
  "$8,000",
  "$16,000",
  "$32,000", 
  "$64,000",
  "$125,000",
  "$250,000",
  "$500,000",
  "$1 MILLION", 
];

const questions = [
  {
    question: "Which is largest animal in the world?",
    choices: [
      { option: "Whale Shark", ans: false },
      { option: "Blue whale", ans: true },
      { option: "Elephant", ans: false },
      { option: "Great White Shark", ans: false },
    ],
  },
  {
    question: "Which is the largest country in the world?",
    choices: [
      { option: "Russia", ans: true },
      { option: "China", ans: false },
      { option: "United States of America", ans: false },
      { option: "Canada", ans: false },
    ],
  },
  {
    question: "What is Prince Harry's official first name?",
    choices: [
      { option: "Harry", ans: false },
      { option: "Henry", ans: true },
      { option: "Harriet", ans: false },
      { option: "Harold", ans: false },
    ],
  },
  {
    question:
      "What 1997 movie features Will Smith and Tommy Lee Jones as undercover secret agents who police extraterrestrials?",
    choices: [
      { option: "Independence Day", ans: false },
      { option: "Men in Black", ans: true },
      { option: "E.T.", ans: false },
      { option: "Aliens", ans: false },
    ],
  },
  {
    question: "Who is credited with inventing the telephone?",
    choices: [
      { option: "Alexander Graham Bell", ans: true },
      { option: "Thomas Edison", ans: false },
      { option: "Nikola Tesla", ans: false },
      { option: "Albert Einstein", ans: false },
    ],
  },
  {
    question: "What is the capital city of France?",
    choices: [
      { option: "London", ans: false },
      { option: "Berlin", ans: false },
      { option: "Madrid", ans: false },
      { option: "Paris", ans: true },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    choices: [
      { option: "H", ans: false },
      { option: "O", ans: false },
      { option: "W", ans: false },
      { option: "H2O", ans: true },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: [
      { option: "Jupiter", ans: false },
      { option: "Mars", ans: true },
      { option: "Venus", ans: false },
      { option: "Saturn", ans: false },
    ],
  },
  {
    question: "Who wrote the novel 'To Kill a Mockingbird'?",
    choices: [
      { option: "Harper Lee", ans: true },
      { option: "Ernest Hemingway", ans: false },
      { option: "J.K. Rowling", ans: false },
      { option: "Charles Dickens", ans: false },
    ],
  },
  {
    question: "What is the tallest mammal?",
    choices: [
      { option: "Elephant", ans: false },
      { option: "Giraffe", ans: true },
      { option: "Horse", ans: false },
      { option: "Rhinoceros", ans: false },
    ],
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    choices: [
      { option: "China", ans: false },
      { option: "Japan", ans: true },
      { option: "South Korea", ans: false },
      { option: "India", ans: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: [
      { option: "Vincent van Gogh", ans: false },
      { option: "Leonardo da Vinci", ans: true },
      { option: "Pablo Picasso", ans: false },
      { option: "Michelangelo", ans: false },
    ],
  },
  {
    question: "What is the largest organ in the human body?",
    choices: [
      { option: "Heart", ans: false },
      { option: "Skin", ans: true },
      { option: "Liver", ans: false },
      { option: "Brain", ans: false },
    ],
  },
  {
    question: "Which ocean is the largest?",
    choices: [
      { option: "Atlantic Ocean", ans: false },
      { option: "Indian Ocean", ans: false },
      { option: "Arctic Ocean", ans: false },
      { option: "Pacific Ocean", ans: true },
    ],
  },
  {
    question: "What is the main ingredient in guacamole?",
    choices: [
      { option: "Tomato", ans: false },
      { option: "Avocado", ans: true },
      { option: "Onion", ans: false },
      { option: "Cilantro", ans: false },
    ],
  },
];

const questionElement = document.getElementById("questions");
const optionBtns = document.getElementById("option-button");
const next = document.getElementById("nextBtn");
const timer = document.getElementById("timer");


let currentQuestionIndex = 0; //store question index
let countdown; // clear the interval
let timeLeft = 30; // 30 seconds for each question
let score = 0; //store the score

const start = () => {
  currentQuestionIndex = 0; //set the current index to 0
  score = 0; //set the score to 0
  next.innerHTML = "Next Question"; //nextBtn answer button to display nextBtn
  reset();
  questions.sort(() => Math.random() - 0.5);
  showNextQuestion(); //display questions
  updatePrizeDisplay(currentQuestionIndex);
};

const timeDisplay = () => {
  document.getElementById("timer").textContent = `Time: ${timeLeft} seconds`; //function to display timer
};

const startTimer = () => {
  timeLeft = 30; //reset timer for each question
  timeDisplay(); // update timer display

  countdown = setInterval(() => {
    timeLeft -= 1;
    timeDisplay();

    if (timeLeft <= 0) {
      clearInterval(countdown); //stop timer
      correctAnswer();
      const currentPrizeItem = document.querySelector("#prize-list .blinking");
      if (currentPrizeItem) {
      currentPrizeItem.classList.remove("blinking"); // Remove blinking style
      currentPrizeItem.classList.add("wrong"); // Turn the current prize item red
    }
    next.innerHTML = "Go to Results";
    next.style.display = "inline-block";
    }
  }, 1000); //decrease every second
};

const correctAnswer = () => {
  Array.from(optionBtns.children).forEach((options) => {
    //converts children of optionBtns to use for each
    if (options.dataset.ans === "true") {
      //checks each button to see which is the correct answer
      options.style.backgroundColor = "#9aeabc"; //turn correct option green
    }
    options.disabled = true; //disable button to prevent further clicks
  });
};

const stopTimer = () => {
  clearInterval(countdown); //stop any existing timer
};

const showNextQuestion = () => {
  stopTimer();
  reset();
  if (currentQuestionIndex === questions.length - 1) {
    next.innerHTML = "Show Results"; // button displays show results at last question
  } else {
    next.innerHTML = "Next Question"; // button displays show next question
  }

  let currentQuestion = questions[currentQuestionIndex]; // question index number in array
  let questionNum = currentQuestionIndex + 1; //plus 1 to display which question number
  questionElement.innerHTML = questionNum + ". " + currentQuestion.question; //display question number and current question

  currentQuestion.choices.forEach((choice) => {
    const options = document.createElement("button");
    options.innerHTML = choice.option; //options button to display options for the question
    options.classList.add("btn"); //made btn class
    optionBtns.appendChild(options); //display the options in buttons
    if (choice.ans) {
      options.dataset.ans = choice.ans;
    }
    options.addEventListener("click", selectOption);
  });

  startTimer(); //start new timer for next question
  updatePrizeDisplay(currentQuestionIndex);
  Array.from(optionBtns.children).forEach((option) => {
    option.disabled = false;
  });
};

const updatePrizeDisplay = (currentQuestionIndex) => {
  const prizeListItems = document.querySelectorAll("#prize-list li"); // get all prize list items
  prizeListItems.forEach((item, index) => {
    if (index === prizeMoneyList.length - currentQuestionIndex - 1) {
      // if the index matches the current question index
      item.classList.add("blinking"); // make the prize money blinking yellow
      if (currentQuestionIndex >= index) {
        item.classList.add("correct-answer");
      } else {
        item.classList.remove("correct-answer");
      }
    } else {
      item.classList.remove("blinking"); // remove blinking style from other prize money
    }
  });
};

const reset = () => {
  //function to hide next button
  next.style.display = "none";
  while (optionBtns.firstChild) {
    //remove each child in the optionBtns ID before displaying new ones for the next question
    optionBtns.removeChild(optionBtns.firstChild);
  }
};

const selectOption = (e) => {
  stopTimer();
  const selected = e.target; //selected button element //target, element that triggered event, one of the options
  const correct = selected.dataset.ans === "true"; //check if selected dataset is true
  Array.from(optionBtns.children).forEach((option) => {
    option.disabled = true;
    if (option.dataset.ans === "true") {
      option.style.backgroundColor = "#9aeabc"; // Turn the correct option green
      if (correct) {
        score++;
      }
    }
  });

  const currentPrizeItem = document.querySelector("#prize-list .blinking");
  if (currentPrizeItem) {
    currentPrizeItem.classList.remove("blinking"); // Remove blinking style
    if (correct) {
      currentPrizeItem.classList.add("correct-answer"); // Turn the current prize item green if the answer is correct
    } else {
      currentPrizeItem.classList.add("wrong");
    }
  }

  // If the selected option is correct, keep it green; otherwise, turn the selected option red
  if (correct) {
    selected.style.backgroundColor = "#9aeabc"; // Turn the selected option green
  } else {
    selected.style.backgroundColor = "#ff9393"; // Turn the selected option red
    next.innerHTML = "Go to Results"; // Change button text to "Go to Results"
  }

  next.style.display = "inline-block"; // Display the next button
};

const displayScore = () => {
  //function to display score
  reset();
  questionElement.innerHTML = `Your score: ${score}/${questions.length}`;
  next.innerHTML = "Play Again";
  next.style.display = "block";
  timer.style.display = "none";
  next.addEventListener("click", playAgain);
};
const playAgain = () => {
  currentQuestionIndex = 0;
  score = 0;
  start();
  timer.style.display = "block";
};


const goNext = () => {
  //function when next button is clicked
  currentQuestionIndex++; //increase question index by 1 when next button is clicked
  if (currentQuestionIndex < questions.length) {
    showNextQuestion(); //display next question
    updatePrizeDisplay(currentQuestionIndex);
  } else {
    displayScore(); //if no more questions, run display score function
  }
};

next.addEventListener("click", () => {
  stopTimer();
  if (next.innerHTML === "Go to Results") {
    displayScore();
  } else {
    goNext();
  }
});
// start();
