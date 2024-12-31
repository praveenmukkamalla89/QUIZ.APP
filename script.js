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
    }
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