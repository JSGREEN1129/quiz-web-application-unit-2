const questions = {
  generalKnowledge: {
    easy: [
      {
        question: "How many hours are there in a day?",
        options: ["24", "12", "18"],
        answer: "24"
      }
    ],
    average: [
      {
        question: "Which ocean is the largest in the world?",
        options: ["Atlantic", "Indian", "Pacific"],
        answer: "Pacific"
      }
    ],
    hard: [
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Gd"],
        answer: "Au"
      }
    ]
  },
  history: {
    easy: [
      {
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
        answer: "George Washington"
      }
    ],
    average: [
      {
        question: "Which war ended in 1945?",
        options: ["World War I", "World War II", "Vietnam War"],
        answer: "World War II"
      }
    ],
    hard: [
      {
        question: "In which year did the Berlin Wall fall?",
        options: ["1989", "1991", "1985"],
        answer: "1989"
      }
    ]
  },
  science: {
    easy: [
      {
        question: "What gas do humans need to breathe?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen"],
        answer: "Oxygen"
      }
    ],
    average: [
      {
        question: "What planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus"],
        answer: "Mars"
      }
    ],
    hard: [
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome"],
        answer: "Mitochondria"
      }
    ]
  },
  mathematics: {
    easy: [
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        answer: "4"
      }
    ],
    average: [
      {
        question: "What is the square root of 64?",
        options: ["6", "8", "10"],
        answer: "8"
      }
    ],
    hard: [
      {
        question: "What is the derivative of x²?",
        options: ["2x", "x", "x²"],
        answer: "2x"
      }
    ]
  },
  entertainment: {
    easy: [
      {
        question: "Which character lives in a pineapple under the sea?",
        options: ["SpongeBob", "Patrick", "Squidward"],
        answer: "SpongeBob"
      }
    ],
    average: [
      {
        question: "Who directed the movie 'Inception'?",
        options: ["Steven Spielberg", "Christopher Nolan", "James Cameron"],
        answer: "Christopher Nolan"
      }
    ],
    hard: [
      {
        question: "In which year was the first Academy Awards ceremony held?",
        options: ["1929", "1939", "1949"],
        answer: "1929"
      }
    ]
  },
  sport: {
    easy: [
      {
        question: "How many players are on a soccer team?",
        options: ["11", "9", "10"],
        answer: "11"
      }
    ],
    average: [
      {
        question: "Which country won the 2018 FIFA World Cup?",
        options: ["Germany", "France", "Brazil"],
        answer: "France"
      }
    ],
    hard: [
      {
        question: "In which sport is the Davis Cup contested?",
        options: ["Cricket", "Tennis", "Golf"],
        answer: "Tennis"
      }
    ]
  }
};

function toTitleCase(str) {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .replace(/\s+/g, ' ')
    .trim();
}

// Variables to track quiz state
let currentTopic = '';
let currentDifficulty = '';
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let totalTimeSpent = 0;
let timerInterval = null;

function startQuiz(topic, difficulty) {
  currentTopic = topic;
  currentDifficulty = difficulty;
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 15;
  totalTimeSpent = 0;

  document.getElementById('quizContent').innerHTML = '';

  const modalTitle = document.getElementById('quizModalLabel');
  modalTitle.textContent = `${toTitleCase(topic)} Quiz - ${toTitleCase(difficulty)}`;

  const submitBtn = document.getElementById('submitBtn');
  submitBtn.textContent = 'Submit Answer';
  submitBtn.classList.remove('d-none');
  submitBtn.disabled = false;
  submitBtn.removeEventListener('click', tryAgain);
  submitBtn.addEventListener('click', submitAnswer);

  if (timerInterval) clearInterval(timerInterval);

  loadQuestion();
}

function loadQuestion() {
  const quizContent = document.getElementById('quizContent');
  const submitBtn = document.getElementById('submitBtn');
  const timerDisplay = document.getElementById('timerDisplay');
  const totalQuestions = questions[currentTopic][currentDifficulty].length;
  const question = questions[currentTopic][currentDifficulty][currentQuestionIndex];

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
      quizContent.innerHTML += `<p class="text-success fw-bold mt-2">Perfect Score! 🎉</p>`;
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
  const correctAnswer = questions[currentTopic][currentDifficulty][currentQuestionIndex].answer;
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
  startQuiz(currentTopic, currentDifficulty);
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

// Reset timer when modal is closed
const modalElement = document.querySelector('#quizModal');
modalElement.addEventListener('hidden.bs.modal', () => {
  if (timerInterval) clearInterval(timerInterval);
  timeLeft = 15;
  totalTimeSpent = 0;
  document.getElementById('timerDisplay').innerHTML = `<i class="fa-solid fa-stopwatch"></i> Time left: ${timeLeft}s`;
  document.getElementById('submitBtn').disabled = false;
});