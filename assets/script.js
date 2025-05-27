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

function startQuiz(difficulty) {
  currentDifficulty = difficulty;
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 15; // Reset timer to 15 seconds
  totalTimeSpent = 0; // Reset total time

  document.getElementById('quizContent').innerHTML = '';

  const modalTitle = document.getElementById('quizModalLabel');
  modalTitle.textContent = `General Knowledge Quiz - ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`;

  // Reset submit button
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.textContent = 'Submit Answer';
  submitBtn.classList.remove('d-none');
  submitBtn.disabled = false; // Ensure button is enabled
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
    // Calculate progress bar percentage (inverted: less time used = fuller bar)
    const maxTime = totalQuestions * 15; // Maximum possible time (15s per question)
    const timeUsedPercentage = (totalTimeSpent / maxTime) * 100;
    const timeRemainingPercentage = 100 - timeUsedPercentage; // Fuller bar for less time used

    // Format total time for display
    const minutes = Math.floor(totalTimeSpent / 60);
    const seconds = totalTimeSpent % 60;
    const timeFormatted = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

    quizContent.innerHTML = `
      <h4>Quiz Completed!</h4>
      <p>Your score: ${score} out of ${totalQuestions}</p>
      <div class="progress mt-2" style="height: 20px;">
        <div class="progress-bar bg-success" role="progressbar" style="width: ${timeRemainingPercentage}%;" 
             aria-valuenow="${timeRemainingPercentage}" aria-valuemin="0" aria-valuemax="100">
          It took you: ${timeFormatted}
        </div>
      </div>
    `;
    // Stop the timer
    clearInterval(timerInterval);
    timerDisplay.innerHTML = `<i class="fa-solid fa-stopwatch"></i> Quiz finished`;

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

  // Start the timer
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.innerHTML = `<i class="fa-solid fa-stopwatch"></i> Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerDisplay.innerHTML = `<i class="fa-solid fa-stopwatch"></i> Time’s up!`;
      submitBtn.disabled = true;

      // Update total time spent (15 seconds since time ran out)
      totalTimeSpent += 15;

      // Automatically move to the next question after a brief delay
      setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
      }, 1000); // 1-second delay before moving to the next question
    }
  }, 1000); // Update every second
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

  // Update total time spent (15 seconds minus remaining time)
  totalTimeSpent += (15 - timeLeft);

  // Clear the timer
  clearInterval(timerInterval);

  // Move to the next question
  currentQuestionIndex++;

  // Load the next question or show results
  loadQuestion();
}

function tryAgain() {
  // Clear the timer
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

// Reset timer when modal is closed
const modalElement = document.querySelector('.modal'); // Adjust selector to your modal
modalElement.addEventListener('hidden.bs.modal', () => {
  if (timerInterval) clearInterval(timerInterval);
  timeLeft = 15;
  totalTimeSpent = 0; // Reset total time
  document.getElementById('timerDisplay').innerHTML = `<i class="fa-solid fa-stopwatch"></i> Time left: ${timeLeft}s`;
  document.getElementById('submitBtn').disabled = false;
});