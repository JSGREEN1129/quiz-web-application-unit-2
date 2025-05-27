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
  ],
  average: [
    {
      question: "What planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Venus"],
      answer: "Mars"
    },
    {
      question: "What gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
      answer: "Carbon Dioxide"
    },
    {
      question: "Which ocean is the largest in the world?",
      options: ["Atlantic", "Indian", "Pacific"],
      answer: "Pacific"
    }
  ],
  hard: [
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome"],
      answer: "Mitochondria"
    },
    {
      question: "Who developed the theory of general relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla"],
      answer: "Albert Einstein"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Gd"],
      answer: "Au"
    }
  ]
};

// Variables to track quiz state
let currentDifficulty = '';
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15; // 15 seconds per question
let totalTimeSpent = 0; // Track total time spent on quiz (in seconds)
let timerInterval = null; // To store the timer interval
let currentUser = null; // Track logged-in user

// Initialize users from localStorage
let users = JSON.parse(localStorage.getItem('users')) || {};
let scores = JSON.parse(localStorage.getItem('scores')) || [];

function startQuiz(difficulty) {
  currentDifficulty = difficulty;
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 15;
  totalTimeSpent = 0;

  document.getElementById('quizContent').innerHTML = '';

  const modalTitle = document.getElementById('quizModalLabel');
  modalTitle.textContent = `General Knowledge Quiz - ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`;

  // Reset submit button
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.textContent = 'Submit Answer';
  submitBtn.classList.remove('d-none');
  submitBtn.disabled = false;
  submitBtn.removeEventListener('click', tryAgain);
  submitBtn.addEventListener('click', submitAnswer);

  // Clear any existing timer
  if (timerInterval) clearInterval(timerInterval);

  // Load the first question
  loadQuestion();
}

function loadQuestion() {
  const quizContent = document.getElementById('quizContent');
  const submitBtn = document.getElementById('submitBtn');
  const timerDisplay = document.getElementById('timerDisplay');
  const totalQuestions = questions[currentDifficulty].length;
  const question = questions[currentDifficulty][currentQuestionIndex];

  // Clear any existing timer
  if (timerInterval) clearInterval(timerInterval);

  // Reset timer for the new question
  timeLeft = 15;
  timerDisplay.innerHTML = `<i class="fa-solid fa-stopwatch"></i> Time left: ${timeLeft}s`;
  submitBtn.disabled = false;

  if (!question) {
    // Quiz completed
    const maxTime = totalQuestions * 15;
    const timeUsedPercentage = (totalTimeSpent / maxTime) * 100;
    const timeRemainingPercentage = 100 - timeUsedPercentage;
    const minutes = Math.floor(totalTimeSpent / 60);
    const seconds = totalTimeSpent % 60;
    const timeFormatted = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

    quizContent.innerHTML = `
      <h4>Quiz Completed!</h4>
      <p>Your score: ${score} out of ${totalQuestions}</p>
      <div class="progress mt-2" style="height: 20px;">
        <div class="progress-bar bg-success" role="progressbar" style="width: ${timeRemainingPercentage}%;" 
             aria-valuenow="${timeRemainingPercentage}" aria-valuemin="0" aria-valuemax="100">
          Time Efficiency: ${timeFormatted}
        </div>
      </div>
      <button type="button" class="btn btn-success mt-3 mb-3 me-2" onclick="submitScore()">Submit Score</button>
      ${score === totalQuestions ? '<p class="text-success fw-bold">Perfect Score! 🎉</p>' : ''}
    `;
    clearInterval(timerInterval);
    timerDisplay.innerHTML = `<i class="fa-solid fa-stopwatch"></i> Quiz finished`;

    // Keep Try Again button in modal footer
    if (score < totalQuestions) {
      submitBtn.textContent = 'Try Again';
      submitBtn.classList.remove('d-none');
      submitBtn.removeEventListener('click', submitAnswer);
      submitBtn.addEventListener('click', tryAgain);
    } else {
      submitBtn.classList.add('d-none');
      triggerConfetti();
    }

    return;
  }

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

  submitBtn.textContent = 'Submit Answer';
  submitBtn.classList.remove('d-none');

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.innerHTML = `<i class="fa-solid fa-stopwatch"></i> Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerDisplay.innerHTML = `<i class="fa-solid fa-stopwatch"></i> Time’s up!`;
      submitBtn.disabled = true;
      totalTimeSpent += 15;

      setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
      }, 1000);
    }
  }, 1000);
}

function submitAnswer() {
  const form = document.getElementById('quizForm');
  const selectedAnswer = form.querySelector('input[name="answer"]:checked');

  if (!selectedAnswer) {
    alert('Please select an answer!');
    return;
  }

  const correctAnswer = questions[currentDifficulty][currentQuestionIndex].answer;
  if (selectedAnswer.value === correctAnswer) {
    score++;
  }

  totalTimeSpent += (15 - timeLeft);
  clearInterval(timerInterval);
  currentQuestionIndex++;
  loadQuestion();
}

function tryAgain() {
  if (timerInterval) clearInterval(timerInterval);
  startQuiz(currentDifficulty);
}

function triggerConfetti() {
  try {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#28a745', '#ffffff', '#ffd700'],
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

function handleRegister() {
  const username = document.getElementById('registerUsername').value.trim();
  const password = document.getElementById('registerPassword').value;
  const errorElement = document.getElementById('registerError');

  if (!username || !password) {
    errorElement.textContent = 'Please fill in all fields.';
    errorElement.classList.remove('d-none');
    return;
  }

  if (users[username]) {
    errorElement.textContent = 'Username already exists.';
    errorElement.classList.remove('d-none');
    return;
  }

  users[username] = { password }; // In a real app, hash the password
  localStorage.setItem('users', JSON.stringify(users));
  errorElement.classList.add('d-none');
  alert('Registration successful! Please log in.');
  document.getElementById('login-tab').click();
  document.getElementById('registerForm').reset();
}

function handleLogin() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;
  const errorElement = document.getElementById('loginError');

  if (!username || !password) {
    errorElement.textContent = 'Please fill in all fields.';
    errorElement.classList.remove('d-none');
    return;
  }

  if (!users[username] || users[username].password !== password) {
    errorElement.textContent = 'Invalid username or password.';
    errorElement.classList.remove('d-none');
    return;
  }

  currentUser = username;
  errorElement.classList.add('d-none');
  document.getElementById('loginForm').reset();
  bootstrap.Modal.getInstance(document.getElementById('authModal')).hide();
  submitScore();
}

function submitScore() {
  if (!currentUser) {
    const authModal = new bootstrap.Modal(document.getElementById('authModal'));
    authModal.show();
    return;
  }

  const scoreEntry = {
    username: currentUser,
    difficulty: currentDifficulty,
    score: score,
    totalQuestions: questions[currentDifficulty].length,
    timeTaken: totalTimeSpent,
    timestamp: new Date().toISOString()
  };
  scores.push(scoreEntry);
  localStorage.setItem('scores', JSON.stringify(scores));

  document.getElementById('quizContent').innerHTML += `
    <p class="text-success mt-3">Score submitted successfully for ${currentUser}!</p>
  `;
}

// Reset timer and user state when modal is closed
const modalElement = document.querySelector('#quizModal');
modalElement.addEventListener('hidden.bs.modal', () => {
  if (timerInterval) clearInterval(timerInterval);
  timeLeft = 15;
  totalTimeSpent = 0;
  document.getElementById('timerDisplay').innerHTML = `<i class="fa-solid fa-stopwatch"></i> Time left: ${timeLeft}s`;
  document.getElementById('submitBtn').disabled = false;
});