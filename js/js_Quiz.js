const questions = [
  {
    question: 'Welche Mannschaft hat die meisten NBA- Meisterschaften gewonnen ?',
    answers: [
      { text: 'Los Angeles Lakers', correct: false },
      { text: 'Boston Celtics', correct: true },
      { text: 'Chicago Bulls', correct: false },
      { text: 'Golden State Warriors', correct: false },
    ],
  },
  {
    question: 'Wie hoch ist der offizielle Durchmesser eines NBA-Basketballs?',
    answers: [
      { text: '28,5 Zoll', correct: false },
      { text: '29,5 Zoll', correct: true },
      { text: '30 Zoll', correct: false },
      { text: '31 Zoll', correct: false },
    ],
  },
  {
    question:
      'Welcher Spieler hält den Rekord für die meisten Punkte in einem einzelnen NBA-Spiel?',
    answers: [
      { text: 'LeBron James', correct: false },
      { text: 'Michael Jordan', correct: false },
      { text: 'Wilt Chamberlain', correct: true },
      { text: 'Kobe Bryant', correct: false },
    ],
  },
  {
    question:
      'In welchem Jahr fand das berühmte Dream Team der USA bei den Olympischen Spielen statt?',
    answers: [
      { text: '1984', correct: false },
      { text: '1992', correct: true },
      { text: '2000', correct: false },
      { text: '2016', correct: false },
    ],
  },
  {
    question:
      'Welcher Spieler hält den Rekord für die meisten erzielten Punkte in einer einzigen NBA-Saison?',
    answers: [
      { text: 'Michael Jordan', correct: false },
      { text: 'Kareem Abdul-Jabbar', correct: false },
      { text: 'Kobe Bryant', correct: false },
      { text: 'Wilt Chamberlain', correct: true },
    ],
  },
  {
    question:
      'Wie viele Spieler sind normalerweise gleichzeitig auf dem Basketballfeld in einem NBA-Spiel?',
    answers: [
      { text: '4', correct: false },
      { text: '6', correct: false },
      { text: '10', correct: true },
      { text: '12', correct: false },
    ],
  },
  {
    question:
      'Welches NBA-Team wurde als The Bad Boys bekannt und war für seine harte Verteidigung berühmt?',
    answers: [
      { text: 'Los Angeles Lakers', correct: false },
      { text: 'Chicago Bulls', correct: false },
      { text: 'Detroit Pistons', correct: true },
      { text: 'Boston Celtics', correct: false },
    ],
  },
  {
    question: 'Wie viele Sekunden hat ein Spieler, um einen Freiwurf im Basketball abzugeben?',
    answers: [
      { text: '5 Sekunden', correct: true },
      { text: '10 Sekunden', correct: false },
      { text: '15 Sekunden', correct: false },
      { text: '24 Sekunden', correct: false },
    ],
  },
  {
    question:
      'Welcher Spieler wurde als The Logo bezeichnet und ist das Bild auf dem offiziellen NBA-Logo?',
    answers: [
      { text: 'Magic Johnson', correct: false },
      { text: 'Larry Bird', correct: false },
      { text: 'Jerry West', correct: true },
      { text: 'Shaquille ONeal', correct: false },
    ],
  },
  {
    question: 'Welches Team gewann die NBA-Meisterschaft 2021?',
    answers: [
      { text: 'Los Angeles Lakers', correct: false },
      { text: 'Brooklyn Nets', correct: false },
      { text: 'Milwaukee Bucks', correct: true },
      { text: 'Golden State Warriors', correct: false },
    ],
  },
  {
    question:
      'Welcher Spieler hält den Rekord für die meisten Karriere-Punkte in der NBA-Geschichte?',
    answers: [
      { text: 'LeBron James', correct: true },
      { text: 'Kobe Bryant', correct: false },
      { text: 'Kareem Abdul-Jabbar', correct: false },
      { text: 'Michael Jordan', correct: false },
    ],
  },
  {
    question: 'In welcher Stadt befindet sich die Basketball Hall of Fame?',
    answers: [
      { text: 'New York City', correct: false },
      { text: 'Chicago', correct: false },
      { text: 'Los Angeles', correct: false },
      { text: 'Springfield, Massachusetts', correct: true },
    ],
  },
  {
    question: 'Wie viele Viertel hat ein NBA-Spiel?',
    answers: [
      { text: '2', correct: false },
      { text: '3', correct: false },
      { text: '4', correct: true },
      { text: '5', correct: false },
    ],
  },
  {
    question: 'Wie hoch ist der Korb in der NBA vom Boden aus gemessen?',
    answers: [
      { text: '9 Fuß (ca. 2,74 Meter)', correct: false },
      { text: '10 Fuß (ca. 3,05 Meter)', correct: true },
      { text: '11 Fuß (ca. 3,35 Meter)', correct: false },
      { text: '12 Fuß (ca. 3,66 Meter)', correct: false },
    ],
  },
  {
    question:
      'Welcher NBA-Spieler führte die Liga in der Saison 2020-2021 in Punkten pro Spiel an?',
    answers: [
      { text: 'LeBron James', correct: false },
      { text: 'Stephen Curry', correct: true },
      { text: 'Kevin Durant', correct: false },
      { text: 'James Harden', correct: false },
    ],
  },
  {
    question: 'Wie viele Teams nehmen in der NBA regulär an den Playoffs teil?',
    answers: [
      { text: '8', correct: false },
      { text: '12', correct: false },
      { text: '16', correct: true },
      { text: '20', correct: false },
    ],
  },
  {
    question: 'Welches Team wurde 2021 NBA-Champion?',
    answers: [
      { text: 'Los Angeles Lakers', correct: false },
      { text: 'Milwaukee Bucks', correct: true },
      { text: 'Brooklyn Nets', correct: false },
      { text: 'Golden State Warriors', correct: false },
    ],
  },
  {
    question:
      'Welches Team gewann die ersten beiden NBA-Meisterschaften in der Geschichte der Liga?',
    answers: [
      { text: 'Boston Celtics', correct: false },
      { text: 'Chicago Bulls', correct: false },
      { text: 'Minneapolis Lakers', correct: true },
      { text: 'Philadelphia Warriors', correct: false },
    ],
  },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }
  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
  });
  nextButton.style.display = 'block';
  answerButtons.querySelectorAll('button').forEach((button) => {
    button.removeEventListener('click', selectAnswer);
  });
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Du hast ${score} von ${questions.length} Fragen richtig!`;
  nextButton.innerHTML = 'Erneut spielen';
  nextButton.style.display = 'block';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
