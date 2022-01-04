// main function initQuiz
function setValueOfQuestionsText() {
    document.getElementById('value-quiz').innerHTML = currentQuiz.length;
}



// main function showQuestion
function endOfGame() {
    return currentQuestion >= currentQuiz.length;
}



function endGameScreen() {
    document.getElementById('question-cards').style = 'display: none;';
    document.getElementById('end-screen').style = '';
    document.getElementById('end-all-questions').innerHTML = currentQuiz.length;
    document.getElementById('end-right-questions').innerHTML = rightQuestions;
    document.getElementById('progress-bar-end').style = `width: 100%`
    audioWin.play();
}



function continueGame() {
    progressStatusBar();

    let question = currentQuiz[currentQuestion];
    showNextQuestion(question);
    showNextAnswers(question);

}



// main function continueGame
function progressStatusBar() {
    let progress = Math.round(currentQuestion / currentQuiz.length * 100);
    let questValue = document.getElementById('start-value').innerHTML = currentQuestion +1;

    document.getElementById('progress-bar').style = `width: ${progress}%`
}



function showNextQuestion(question) {
    document.getElementById('question-text').innerHTML = question['question'];
}



function showNextAnswers(question) {
    for (i = 1; i <= 4; i++) {
        document.getElementById(`answer-${i}`).innerHTML = question[`answer_${i}`]
    }
}



// main function ifAnswerElected
function correctAnswer(numberAnswer) {
    document.getElementById(numberAnswer).classList.add('bg-right');
    rightQuestions++;
    audioCorrect.play();
}



function falseAnswer(numberAnswer) {
    document.getElementById(numberAnswer).classList.add('bg-false');
    audioFail.play();
}



function showCorrectAnswer(rightAnswer){
    document.getElementById(rightAnswer).classList.add('bg-right');
}



function releaseNextQuestionButton() {
    document.getElementById('btn-next').disabled = false;
}



// main function nextQuestion
function lockNextQuestionButton() {
    document.getElementById('btn-next').disabled = true;
}



function resetAnswerBackground() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`${i}`).classList.remove('bg-right', 'bg-false');
    }
}



function addValueOfCurrentQuizQestionText() {
    let questValue = document.getElementById('start-value').innerHTML = currentQuestion + 1;
}



// main function restartQuiz
function resetParameters() {
    currentQuestion = 0;
    rightQuestions = 0;
    initQuiz(currentQuiz);
}