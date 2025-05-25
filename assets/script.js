// Questions for easy difficulty
const questions = {
  easy: [
    {
      question: "How many hours are there in a day?",
      options: ["24", "12", "18"],
      answer: "24"
    },
    {
      question: "What is the first letter of the alphabet?",
      options: ["A", "B", "C"],
      answer: "A"
    },
    {
      question: "Which shape has three sides?",
      options: ["Square", "Triangle", "Circle"],
      answer: "Triangle"
    }
  ]
};

//Variables to track quiz state
let currentDifficulty = '';
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(difficulty) {
  currentDifficulty = difficulty;
  currentQuestionIndex = 0;
  score = 0;

  const modalTitle = document.getElementById('quizModalLabel');
  modalTitle.textContent = `General Knowledge Quiz - ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`;

  // Reset submit button
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.textContent = 'Submit Answer';
  submitBtn.classList.remove('d-none');
  submitBtn.removeEventListener('click', tryAgain);
  submitBtn.addEventListener('click', submitAnswer);

  // Load the first question
  loadQuestion();
}

function loadQuestion() {
  const quizContent = document.getElementById('quizContent');
  const submitBtn = document.getElementById('submitBtn');
  const totalQuestions = questions[currentDifficulty].length;
  const question = questions[currentDifficulty][currentQuestionIndex];

  if (!question) {
    quizContent.innerHTML = `
      <h4>Quiz Completed!</h4>
      <p>Your score: ${score} out of ${totalQuestions}</p>
    `;

    // Change Submit button to Try Again if user does not get all questions correct
    if (score < totalQuestions) {
      submitBtn.textContent = 'Try Again';
      submitBtn.removeEventListener('click', submitAnswer);
      submitBtn.addEventListener('click', tryAgain);
    } else {
      // Perfect score: hide try again button and trigger confetti
      submitBtn.classList.add('d-none');
      quizContent.innerHTML += `<p class="text-success fw-bold">Perfect Score! 🎉</p>`;
      triggerConfetti();
    }

    return;
  }

  // Load next question
  quizContent.innerHTML = `
    <h4>Question ${currentQuestionIndex + 1}: ${question.question}</h4>
    <form id="quizForm">
      ${question.options.map((option, index) => `
        <div class="form-check">
          <input type="radio" name="answer" id="option${index}" value="${option}" class="form-check-input">
          <label class="form-check-label" for="option${index}">${option}</label>
        </div>
      `).join('')}
    </form>
  `;

  // Ensure submit button is visible and set to Submit Answer
  submitBtn.textContent = 'Submit Answer';
  submitBtn.classList.remove('d-none');
}

function submitAnswer() {
  const form = document.getElementById('quizForm');
  const selectedAnswer = form.querySelector('input[name="answer"]:checked');

  if (!selectedAnswer) {
    alert('Please select an answer!');
    return;
  }

  // Check if the answer is correct
  const correctAnswer = questions[currentDifficulty][currentQuestionIndex].answer;
  if (selectedAnswer.value === correctAnswer) {
    score++;
  }

  // Move to the next question
  currentQuestionIndex++;

  // Load the next question or show results
  loadQuestion();
}

function tryAgain() {
  startQuiz(currentDifficulty);
}

function triggerConfetti() {
  try {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#28a745', '#ffffff', '#ffd700'], // Bootstrap success green, white, gold
        duration: 3000
      });
      console.log('Confetti animation triggered successfully');
    } else {
      console.error('Confetti library not loaded');
      document.getElementById('quizContent').innerHTML += `<p class="text-warning">Confetti animation unavailable. Please check your internet connection.</p>`;
    }
  } catch (error) {
    console.error('Error triggering confetti:', error);
    document.getElementById('quizContent').innerHTML += `<p class="text-warning">Confetti animation failed to load.</p>`;
  }
}