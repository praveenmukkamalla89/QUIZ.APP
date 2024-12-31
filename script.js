const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Text Manipulation Language"
        ],
        answer: 0
    },
    {
        question: "What is the correct syntax for referring to an external script?",
        options: [
            "<script href='script.js'>",
            "<script src='script.js'>",
            "<script name='script.js'>",
            "<script link='script.js'>"
        ],
        answer: 1
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Colorful Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets"
        ],
        answer: 2
    },

{
question: "What does JS stand for?",
options: [
"Java Style",
"JavaScript",
"Java Standard",
"Jquery Syntax"
],
answer: 1
},

{
question: "What is the primary function of the 'var' keyword in JavaScript?",
options: [
"To declare a constant variable",
"To declare a global variable",
"To declare a local variable",
"To declare a function"
],
answer: 2
},

{
question: "Which of the following is a popular JavaScript library?",
options: [
"React",
"Angular",
"Vue.js",
"All of the above"
],
answer: 3
},

{
question: "What does API stand for?",
options: [
"Application Programming Interface",
"Application Protocol Interface",
"Advanced Programming Interface",
"Authorized Programming Interface"
],
answer: 0
},

{
question: "What is the purpose of the 'git' command?",
options: [
"To create a new repository",
"To commit changes to a repository",
"To push changes to a remote repository",
"All of the above"
],
answer: 3
},

{
question: "Which of the following is a popular front-end framework?",
options: [
"Bootstrap",
"Material-UI",
"Tailwind CSS",
"All of the above"
],
answer: 3
},

{
question: "What does SQL stand for?",
options: [
"Structured Query Language",
"Standard Query Language",
"Simple Query Language",
"Secure Query Language"
],
answer: 0
},

{
question: "What is the purpose of the 'console.log()' function in JavaScript?",
options: [
"To print output to the screen",
"To debug code",
"To declare a variable",
"To create a function"
],
answer: 1
},

{
question: "Which of the following is a popular back-end framework?",
options: [
"Express.js",
"Django",
"Ruby on Rails",
"All of the above"
],
answer: 3
},

{
question: "What does JSON stand for?",
options: [
"JavaScript Object Notation",
"Java Standard Object Notation",
"JavaScript Open Notation",
"Java Object Notation"
],
answer: 0
},
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit");
const resultEl = document.getElementById("result");

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.textContent = currentQuizData.question;
    optionsEl.innerHTML = "";

    currentQuizData.options.forEach((option, index) => {
        const optionBtn = document.createElement("button");
        optionBtn.textContent = option;
        optionBtn.className = "option-btn";
        optionBtn.dataset.index = index;
        optionBtn.onclick = selectOption;
        optionsEl.appendChild(optionBtn);
    });
}

function selectOption(e) {
    const selectedIndex = e.target.dataset.index;
    const correctIndex = quizData[currentQuiz].answer;

    if (selectedIndex == correctIndex) {
        score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        showResult();
    }
}

function showResult() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    submitBtn.style.display = "none";
    resultEl.textContent = `You scored ${score} out of ${quizData.length}!;`
}

// Initialize the Quiz
loadQuiz();