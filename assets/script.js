const questions = {
  generalKnowledge: {
//General-Knowledge-easy question set
    easy: [
      {
        question: "What is the capital city of France?",
        options: ["Lyon", "Nice", "Paris"],
        answer: "Paris"
      },
      { question: "What planet is known as the 'Red planet'?",
        options: ["Venus", "Mars", "Jupiter"],
        answer: "Mars"
      },
      { question: "What is the chemical symbol for water?",
        options: ["H20", "CO2", "O2"],
        answer: "H20"
      },
      { question: "How many continents are there?",
        options: ["5", "6", "7"],
        answer: "7"
      },
      { question: "What is the largest country by land area?",
        options: ["Canada", "Russia", "USA"],
        answer: "Russia"
      },
      { question: "Which fruit is known for keeping the doctor away?",
        options: ["Banana", "Apple", "Orange"],
        answer: "Apple"
      },
      { question: "What is the currency of Europe?",
        options: ["Euro", "Pound", "Dollar"],
        answer: "Euro"
      },
      { question: "Which animal is known as the 'King of the Jungle'?",
        options: ["Tiger", "Lion", "Elephant"],
        answer: "Lion"
      },
      { question: "Which city is known as the Big Apple?",
        options: ["Los Angeles", "New York City", "Chicago"],
        answer: "New York City"
      },
      { question: "Who discovered gravity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei"],
        answer: "Isaac Newton"
      }
    ],
//General-Knowledge-average question set
    average: [
      {
        question: "Which ocean is the largest in the world?",
        options: ["Atlantic", "Indian", "Pacific"],
        answer: "Pacific"
      },
        { question: "What is the capital of Japan?",
          options: ["Seoul", "Beijing", "Tokyo"],
          answer: "Tokyo"
      },
        { question: "Who wrote the play 'Romeo and Juliet'?",
          options: ["William Shakespeare", "Charles Dickens", "Jane Austen"],
          answer: "William Shakespeare"
      },
        { question: "What is the largest continent by land area?",
          options: ["Africa", "Asia", "Europe"],
          answer: "Asia"
      },
        { question: "In which country would you find the Great Barrier Reef?",
          options: ["Australia", "Brazil", "South Africa"],
          answer: "Australia"
      },
        { question: "Which famous artist painted the 'Mona Lisa'?",
          options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
          answer: "Leonardo da Vinci"
      },
        { question: "What is the largest mammal in the world?",
          options: ["Elephant", "Blue Whale", "Giraffe"],
          answer: "Blue Whale"
      },

        { question: "What is the smallest country in the world?",
          options: ["Monaco", "Vatican City", "Nauru"],
          answer: "Vatican City"
      },
        { question: "Which country is famous for producing Maple Syrup?",
          options: ["USA", "Canada", "Norway"],
          answer: "Canada"
      },
        { question: "Which gas makes up most of the Earth's atmosphere?",
          options: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
          answer: "Nitrogen"
      }
    ],
//General-Knowledge-hard question set
    hard: [
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Gd"],
        answer: "Au"
      },
        { question: "Which element has the chemical symbol 'W'?",
          options: ["Tungsten", "Wolfram", "Wolframium"],
          answer: "Tungsten"
      },
        { question: "In which year did the Titanic sink?",
          options: ["1912", "1905", "1920"],
          answer: "1912"
      },
        { question: "Who wrote the novel 'One Hundred Years of Solitude'?",
          options: ["Jorge Luis Borges", "Gabriel García Márquez", "Mario Vargas Llosa"],
          answer: "Gabriel García Márquez"
      },
        { question: "What is the longest river in the world?",
          options: ["Amazon River", "Nile River", "Yangtze River"],
          answer: "Nile River"
      },
        { question: "Which artist painted the famous 'The Persistence of Memory'?",
          options: ["Pablo Picasso", "Salvador Dalí", "Vincent van Gogh"],
          answer: "Salvador Dalí"
      },
        { question: "Who was the first emperor of China?",
          options: ["Qin Shi Huang", "Han Wudi", "Li Shimin"],
          answer: "Qin Shi Huang"
      },
        { question: "Which planet is known as the 'Morning Star'?",
          options: ["Mars", "Venus", "Mercury"],
          answer: "Venus"
      },
        { question: "In which country was the first modern Olympic Games held?",
          options: ["Greece", "France", "United States"],
          answer: "Greece"
      },
        { question: "What is the capital of Mongolia?",
          options: ["Ulaanbaatar", "Astana", "Tashkent"],
          answer: "Ulaanbaatar"
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
    const timeRemaining = 150 - totalTimeSpent;

    // Format total time for display
    const minutes = Math.floor(totalTimeSpent / 60);
    const seconds = totalTimeSpent % 60;
    const timeFormatted = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

    //Format total time for timeRemaining
    const timeRemainingFormatted = `${timeRemaining}s`;


    quizContent.innerHTML = `
      <h4>Quiz Completed!</h4>
      <p>Your score: ${score} out of ${totalQuestions}</p>
      <div class="progress mt-2" style="height: 20px;">
  <div class="progress-bar bg-danger" role="progressbar" 
       style="width: ${100 - timeRemainingPercentage}%" 
       aria-valuenow="${100 - timeRemainingPercentage}" aria-valuemin="0" aria-valuemax="100">
  </div>
  
  <!-- Green section for remaining time -->
  <div class="progress-bar bg-success" role="progressbar" 
       style="width: ${timeRemainingPercentage}%" 
       aria-valuenow="${timeRemainingPercentage}" aria-valuemin="0" aria-valuemax="100">
    <div>
      Time remaining: ${timeRemainingFormatted}
    </div>
  </div>
</div>
      <div class="timeRemaining mt-2">          
              It took you: ${timeFormatted}
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