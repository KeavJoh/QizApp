let currentQuestion = 0;
let rightQuestions = 0;
let audioCorrect = new Audio('../sounds/correct.mp3');
let audioFail = new Audio('../sounds/fail.wav');
let audioWin = new Audio('../sounds/win.mp3')
let quizTask;


function initQuiz(q) {
    document.getElementById('value-quiz').innerHTML = q.length;
    quizTask = q;

    showQuestion();
}


function showQuestion() {

    if (currentQuestion >= quizTask.length) {
        endGame();
    } else {
        continueGame();
    }

}

function endGame() {
    document.getElementById('question-cards').style = 'display: none;';
    document.getElementById('end-screen').style = '';
    document.getElementById('end-all-questions').innerHTML = quizTask.length;
    document.getElementById('end-right-questions').innerHTML = rightQuestions;
    audioWin.play();
    document.getElementById('progress-bar-end').style = `width: 100%`
}

function continueGame() {
    let question = quizTask[currentQuestion];
    let progress = Math.round(currentQuestion / quizTask.length * 100);
    let questValue = document.getElementById('start-value').innerHTML = currentQuestion +1;

    document.getElementById('progress-bar').style = `width: ${progress}%`
    document.getElementById('question-text').innerHTML = question['question']
    document.getElementById('answer-a').innerHTML = question['answer_1']
    document.getElementById('answer-b').innerHTML = question['answer_2']
    document.getElementById('answer-c').innerHTML = question['answer_3']
    document.getElementById('answer-d').innerHTML = question['answer_4']
}

function answer(select) {
    let question = quizTask[currentQuestion];
    let rightAnswer = question['right'];

    if (select == rightAnswer) {
        console.log('Richtig');
        document.getElementById(select).classList.add('bg-right');
        audioCorrect.play();
        rightQuestions++;
    } else {
        console.log('Falsch');
        document.getElementById(select).classList.add('bg-false');
        document.getElementById(rightAnswer).classList.add('bg-right');
        audioFail.play();
    }

    document.getElementById('btn-next').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('btn-next').disabled = true;
    resetAnswer();
    addValueQuizQestion()
    showQuestion();
}

function resetAnswer() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`${i}`).classList.remove('bg-right', 'bg-false');
    }

}

function addValueQuizQestion() {
    let questValue = document.getElementById('start-value').innerHTML = currentQuestion + 1;
}

function restartQuiz() {
    document.getElementById('question-cards').style = '';
    document.getElementById('end-screen').style = 'display: none;';

    currentQuestion = 0;
    rightQuestions = 0;
    initQuiz(quizTask);
}