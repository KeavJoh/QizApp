let currentQuestion = 0;
let rightQuestions = 0;
let audioCorrect = new Audio('./sounds/correct.mp3');
let audioFail = new Audio('./sounds/fail.mp3');
let audioWin = new Audio('./sounds/win.mp3')
let currentQuiz;



function initQuiz(electionQuiz) {
    currentQuiz = electionQuiz;

    setValueOfQuestionsText();
    showQuestion();
}



function showQuestion() {

    if (endOfGame()) {
        endGameScreen();
    } else {
        continueGame();
    }

}



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



function nextQuestion() {
    currentQuestion++;
    lockNextQuestionButton();
    resetAnswerBackground();
    addValueOfCurrentQuizQestionText()
    showQuestion();
}



function restartQuiz() {
    document.getElementById('question-cards').style = '';
    document.getElementById('end-screen').style = 'display: none;';

    resetParameters();
}