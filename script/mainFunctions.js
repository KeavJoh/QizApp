let currentQuestion = 0;
let rightQuestions = 0;
let audioCorrect = new Audio('../sounds/correct.mp3');
let audioFail = new Audio('../sounds/fail.wav');
let audioWin = new Audio('../sounds/win.mp3')
let currentQuiz;



// line 1 in supportFunction.js
function initQuiz(electionQuiz) {
    currentQuiz = electionQuiz;

    setValueOfQuestionsText();
    showQuestion();
}



// line 8 in supportFunction.js
function showQuestion() {

    if (endOfGame()) {
        endGameScreen();
    } else {
        continueGame();
    }

}



// line 61 in supportFunction.js
function ifAnswerElected(numberAnswer) {
    let question = currentQuiz[currentQuestion];
    let rightAnswer = question['right'];

    if (numberAnswer == rightAnswer) {
        correctAnswer(numberAnswer);
    } else {
        falseAnswer(numberAnswer);
        showCorrectAnswer(rightAnswer);
    }

    releaseNextQuestionButton();
}



// line 89 in supportFunction.js
function nextQuestion() {
    currentQuestion++;
    lockNextQuiestionButton();
    resetAnswerBackground();
    addValueOfCurrentQuizQestionText()
    showQuestion();
}



function restartQuiz() {
    document.getElementById('question-cards').style = '';
    document.getElementById('end-screen').style = 'display: none;';

    currentQuestion = 0;
    rightQuestions = 0;
    initQuiz(currentQuiz);
}