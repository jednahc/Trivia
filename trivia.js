const questions = [
  {
    question: "Which is larget animal in the world?",
    opts: [
      { option: "Whale Shark", ans: false },
      { option: "Blue whale", ans: true },
      { option: "Elephant", ans: false },
      { option: "Great White Shark", ans: false },
    ],
  },
  {
    question: "Which is the largest country in the world?",
    opts: [
      { option: "Russia", ans: true },
      { option: "China", ans: false },
      { option: "United States of America", ans: false },
      { option: "Canada", ans: false },
    ],
  },
  {
    question: "What is Prince Harry's official first name?",
    opts: [
      { option: "Harry", ans: false },
      { option: "Henry", ans: true },
      { option: "Harriet", ans: false },
      { option: "Harold", ans: false },
    ],
  },
  {
    question:
      "What 1997 movie features Will Smith and Tommy Lee Jones as undercover secret agents who police extraterrestrials?",
    opts: [
      { option: "Independence Day", ans: false },
      { option: "Men in Black", ans: true },
      { option: "E.T.", ans: false },
      { option: "Aliens", ans: false },
    ],
  },
];

const questionElement = document.getElementById("questions");
const optionBtns = document.getElementById("option-button");
const next = document.getElementById("lock");

let currentIndex = 0; //store question index
let score = 0; //store the score

const start = () => {
  //start
  currentIndex = 0; //set the current index to 0
  score = 0; //set the score to 0
  next.innerHTML = "Next Question"; //lock answer button to display lock
  showNextQuestion(); //display questions
};

const showNextQuestion = () => {
  reset() 
  let currentQuestion = questions[currentIndex]; // question index number in array
  let questionNum = currentIndex + 1; //plus 1 to display which question numbereee
  questionElement.innerHTML = questionNum + ". " + currentQuestion.question; //display question number

  currentQuestion.opts.forEach(opt => { 
    const options = document.createElement('button');
    options.innerHTML = opt.option; //options button to display options for the question
    options.classList.add('btn'); //made btn class 
    optionBtns.appendChild(options); //display the options in buttons
    if(opt.ans) {
        options.dataset.ans = opt.ans;
    }
    options.addEventListener('click', selectOption);
  });
}


const reset = () => { //function to hide next button
    next.style.display = 'none';
    while(optionBtns.firstChild){ //remove each child in the optionBtns ID before displaying new ones for the next question
        optionBtns.removeChild(optionBtns.firstChild);
    }
}

const selectOption = (i) => {
    const selected = i.target; //selected button element //target, element that triggered event, one of the options
    const correct = selected.dataset.ans === 'true'; //check if selected dataset is true
    if(correct){
        selected.style.backgroundColor = "#9aeabc"; //correct answer selected turn option green
        score++; //add score by 1
    }
    else{
        selected.style.backgroundColor = "#ff9393"; //wrong answer selected turn option red
    }

    Array.from(optionBtns.children).forEach(options => { //converts children of optionBtns to use for each
        if(options.dataset.ans === 'true'){ //checks each button to see if it is the correct answer
            options.style.backgroundColor = "#9aeabc"; //turn current option green
        }
        options.disabled = true; //disable button to prevent further clicks
    });
    next.style.display = 'block';
}

const displayScore = () =>{ //function to display score
    reset();
    questionElement.innerHTML = `Your score: ${score}/${questions.length}`;
    next.innerHTML = 'Play Next Level';
    next.style.display = 'block';
}

const goNext = () => { //function when next button is clicked
    currentIndex++; //increase question index by 1 when next button is clicked
    if(currentIndex < questions.length) {
        showNextQuestion(); //display next question
    }
    else{
        displayScore(); //if no more questions, run display score function
    }
}

next.addEventListener('click', () => {
    if(currentIndex < questions.length) {
        goNext(); //run goNext function if the index is lesser than the amount of questions
    }
    else{
        start(); //if no more questions left, run game again
    }
})

start();