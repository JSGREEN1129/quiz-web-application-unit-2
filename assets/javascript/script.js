/*global $, jQuery, setInterval, clearInterval, setTimeout, document */
/*global $,  alert, confetti, fetch, console */

/**
 * Interactive Quiz Application:
 * Loads questions from JSON, manages user interaction,
 * times responses, tracks score, and provides feedback
 * with retry and celebration features.
 */

//Convert string into Title case format
function toTitleCase(str) {
    return str.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()).replace(/\s+/g, " ").trim();
}

/*Quiz variables - holds questions from JSON file, topic selection,
difficulty selection, user score and user time calculation variable */
let questions = {};
let currentTopic = "";
let currentDifficulty = "";
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let totalTimeSpent = 0;
let timerInterval = null;

// Load questions from questions.json file
$.getJSON("questions.json").done(function (data) {
    questions = data;
    $("#startQuizBtn").prop("disabled", false);
}).fail(function (textStatus, error) {
    let err = textStatus + ", " + error;
    console.error("Error loading questions: " + err);
    alert("Could not load quiz questions.");
});

//Function to initiate the quiz state
function startQuiz(topic, difficulty) {
    currentTopic = topic;
    currentDifficulty = difficulty;
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 15;
    totalTimeSpent = 0;

    $("#quizContent").empty();
    $("#quizModalLabel").text(
        `${toTitleCase(topic)} Quiz - ${toTitleCase(difficulty)}`
    );
    const $submitBtn = $("#submitBtn");
    $submitBtn.text("Submit Answer").removeClass("d-none").prop("disabled", false).off("click").on("click", submitAnswer);
    if (timerInterval !== null) {
        clearInterval(timerInterval);
    }
    loadQuestion();
}

//Function to load each individual question for the correct topic and correct difficulty
function loadQuestion() {
    const $quizContent = $("#quizContent");
    const $submitBtn = $("#submitBtn");
    const $timerDisplay = $("#timerDisplay");

    const totalQuestions = questions[currentTopic][currentDifficulty].length;
    const question = questions[currentTopic][currentDifficulty][currentQuestionIndex];
    //Timer reset for each new question and timer calculation
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timeLeft = 15;
    $timerDisplay.html(
        `<i class="fa-solid fa-stopwatch"></i> Time left: ${timeLeft}s`
    );
    $submitBtn.prop("disabled", false);

    if (!question) {
        const maxTime = totalQuestions * 15;
        const timeRemainingPercentage = 100 - (totalTimeSpent / maxTime) * 100;
        const timeRemaining = 150 - totalTimeSpent;
        const minutes = Math.floor(totalTimeSpent / 60);
        const seconds = totalTimeSpent % 60;
        const timeFormatted = (
            minutes > 0
            ? `${minutes}m
      ${seconds}s`
            : `${seconds}s`
        );
        const timeRemainingFormatted = `${timeRemaining}s`;
//Dynamically populate quiz modal with feedback components, stop quiz timer and show final quiz completion feedback
        $quizContent.html(`
      <h4>Quiz Completed!</h4>
      <p>Your score: ${score} out of ${totalQuestions}</p>
      <div class="progress mt-2" style="height: 20px;">
        <div class="progress-bar bg-danger" role="progressbar"
          style="width: ${100 - timeRemainingPercentage}%"
          aria-valuenow="${100 - timeRemainingPercentage}"
          aria-valuemin="0" aria-valuemax="100">
        </div>
        <div class="progress-bar bg-success" role="progressbar"
          style="width: ${timeRemainingPercentage}%"
          aria-valuenow="${timeRemainingPercentage}"
          aria-valuemin="0" aria-valuemax="100">
          <div>Time remaining: ${timeRemainingFormatted}</div>
        </div>
      </div>
      <div class="timeRemaining mt-2">It took you: ${timeFormatted}</div>
    `);

        clearInterval(timerInterval);
        $timerDisplay.html(
            "<i class='fa-solid fa-stopwatch'></i> Quiz finished"
        );

        if (score < totalQuestions) {
            $submitBtn.text("Try Again").off("click").on("click", tryAgain);
        } else {
            $submitBtn.addClass("d-none");
            $quizContent.append(
                `<p class="text-success fw-bold mt-2">Perfect Score! 🎉</p>`
            );
            triggerConfetti();
        }

        return;
    }

    const optionsHtml = question.options.map(
        (opt, i) => `
    <div class="form-check">
      <input type="radio" name="answer" id="option${i}"
        value="${opt}" class="form-check-input">
      <label class="form-check-label" for="option${i}">${opt}</label>
    </div>
  `
    ).join("");

    $quizContent.html(`
    <h4>Question ${currentQuestionIndex + 1}: ${question.question}</h4>
    <form id="quizForm">${optionsHtml}</form>
  `);

    $submitBtn.text("Submit Answer").removeClass("d-none");

    timerInterval = setInterval(function () {
        timeLeft -= 1;
        $timerDisplay.html(
            `<i class="fa-solid fa-stopwatch"></i> Time left: ${timeLeft}s`
        );

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            $timerDisplay.html(
                "<i class='fa-solid fa-stopwatch'></i> Time’s up!"
            );

            $submitBtn.prop("disabled", true);
            totalTimeSpent += 15;

            setTimeout(function () {
                currentQuestionIndex += 1;
                loadQuestion();
            }, 1000);
        }
    }, 1000);
}
//Submit answer through submit button
function submitAnswer() {
    const $form = $("#quizForm");
    const selectedAnswer = $form.find("input[name='answer']:checked").val();

    if (!selectedAnswer) {
        alert("Please select an answer!");
        return;
    }

    const correctAnswer = questions[currentTopic][currentDifficulty][currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
        score += 1;
    }

    totalTimeSpent += 15 - timeLeft;
    clearInterval(timerInterval);
    currentQuestionIndex += 1;
    loadQuestion();
}
//Restart quiz from retry button
function tryAgain() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    startQuiz(currentTopic, currentDifficulty);
}
//Confetti celebration for a perfect score
function triggerConfetti() {
    try {
        if (typeof confetti === "function") {
            confetti({
                colors: ["#28a745", "#ffffff", "#ffd700"],
                duration: 30000,
                origin: {
                    y: 0.6
                },
                particleCount: 1000,
                spread: 1000
            });
        } else {
            $("#quizContent").append(
                `<p class="text-warning">Confetti animation unavailable.</p>`
            );
        }
    } catch {
        $("#quizContent").append(
            `<p class="text-warning">Confetti animation failed to load.</p>`
        );
    }
}