const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    // {
    //     question: "Which of the following is not a programming language?",
    //     a: "Java",
    //     b: "HTML",
    //     c: "Python",
    //     d: "CSS",
    //     correct: "d",
    // },
    // {
    //     question: "What is the result of '2' + 2?",
    //     a: "22",
    //     b: "4",
    //     c: "0",
    //     d: "Undefined",
    //     correct: "a",
    // },
    // {
    //     question: "What is the largest planet in our solar system?",
    //     a: "Earth",
    //     b: "Jupiter",
    //     c: "Mars",
    //     d: "Saturn",
    //     correct: "b",
    // },
    // {
    //     question: "Which country is known as the Land of the Rising Sun?",
    //     a: "China",
    //     b: "Japan",
    //     c: "Korea",
    //     d: "Thailand",
    //     correct: "b",
    // },
];

let objLength=0;
const calculateObjLength=()=>{
    for(let key in quizData)
    {
        if(quizData.hasOwnProperty(key))
            objLength++;
    }
}

calculateObjLength();
console.log(objLength);

const wrapper=document.querySelector(".wrapper");

const question=document.querySelector(".question");
const answer=document.querySelectorAll(".answer");
const answer1=document.querySelector("#ans1");
const answer2=document.querySelector("#ans2");
const answer3=document.querySelector("#ans3");
const answer4=document.querySelector("#ans4");
const nextQuestion=document.querySelector(".btn");

console.log(question);
console.log(answer1);

let currentQuestion=0;
let count=0;

function correctAnswer()
{
    let ans;
    answer.forEach((btn)=>{
        if(btn.checked)
            ans=btn.id;
    });
    return ans;
}

function checkAnswer()
{
    currentQuestion++;
    console.log("currentQuestion : " + currentQuestion);
}

function quizLoader()
{
    question.innerText=quizData[currentQuestion].question;
    answer1.innerText=quizData[currentQuestion].a;
    answer2.innerText=quizData[currentQuestion].b;
    answer3.innerText=quizData[currentQuestion].c;
    answer4.innerText=quizData[currentQuestion].d;
    // answer.innerText=quizData[currentQuestion].;
    // currentQuestion++;
}

quizLoader();

function myFunction(btn){
    btn.checked=false;
}

function unchecked()
{
    answer.forEach(myFunction);
}

function handleNextQuestionClick()
{

    // if(currentQuestion<objLength)
    // {
    //     checkAnswer();
    //     unchecked();
    //     console.log("Current index : " + currentQuestion);
    //     quizLoader(); 
    // }
    // else
    // {
    //     console.log("Correct Answer : " + count);
    // }

    const answer = correctAnswer()
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            count++;
        }
        currentQuestion++;
        unchecked();
        if (currentQuestion < quizData.length) {
            quizLoader()
        } else {
            wrapper.innerHTML = `
           <h2>You answered ${count}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
        }
    }
        
}

// function handleNextQuestionClick() {
//     // Check if a radio button is selected
//     const selectedAnswer = correctAnswer();
//     if (!selectedAnswer) {
//         console.log("Please select an answer.");
//         return; // Exit the function early if no answer is selected
//     }

//     // Check the selected answer
//     checkAnswer();

//     // If all questions have been answered
//     if (currentQuestion === objLength) {
//         console.log("Quiz completed! Correct answers: " + count);
//         // You might want to display the user's score or perform other actions here
//     } else {
//         // Load the next question
//         quizLoader();
//     }
// }


nextQuestion.addEventListener("click",handleNextQuestionClick);

// const quizData = [
//     {
//       question: "What is the capital of France?",
//       options: ["Paris", "Madrid", "Rome", "Berlin"],
//       answer: "Paris"
//     },
//     {
//       question: "What is 10 + 4?",
//       options: ["12", "14", "16", "20"],
//       answer: "14"
//     },
//     // Add more questions here
//   ];
  
//   const questionElement = document.getElementById('question');
//   const optionsElement = document.getElementById('options');
//   const resultElement = document.getElementById('result');
//   const nextButton = document.getElementById('nextBtn');
  
//   let currentQuestion = 0;
//   let score = 0;
  
//   function loadQuestion() {
//     const currentQuizData = quizData[currentQuestion];
//     questionElement.innerText = currentQuizData.question;
//     optionsElement.innerHTML = "";
//     currentQuizData.options.forEach(option => {
//       const button = document.createElement('button');
//       button.innerText = option;
//       button.classList.add('option-btn');
//       button.addEventListener('click', () => checkAnswer(option));
//       optionsElement.appendChild(button);
//     });
//   }
  
//   function checkAnswer(answer) {
//     const currentQuizData = quizData[currentQuestion];
//     if (answer === currentQuizData.answer) {
//       score++;
//       resultElement.innerText = "Correct!";
//     } else {
//       resultElement.innerText = "Incorrect!";
//     }
//     nextButton.style.display = "block";
//   }
  
//   nextButton.addEventListener('click', () => {
//     currentQuestion++;
//     if (currentQuestion < quizData.length) {
//       loadQuestion();
//       resultElement.innerText = "";
//       nextButton.style.display = "none";
//     } else {
//       endQuiz();
//     }
//   });
  
//   function endQuiz() {
//     questionElement.innerText = `You scored ${score} out of ${quizData.length}!`;
//     optionsElement.innerHTML = "";
//     resultElement.innerText = "";
//     nextButton.style.display = "none";
//   }
  
//   loadQuestion();
  