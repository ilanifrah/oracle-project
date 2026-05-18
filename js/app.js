// Main app — uses Quiz, renderResults, ARCHETYPES, QUESTIONS globals.
// No imports needed; loaded after all data/quiz/results scripts.

// ── Screen router ─────────────────────────────────────────

function showScreen(id) {
  var screens = document.querySelectorAll('.screen');
  for (var i = 0; i < screens.length; i++) {
    screens[i].classList.remove('active');
  }
  document.getElementById('screen-' + id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Quiz renderer ─────────────────────────────────────────

function updateNavButtons(quiz) {
  var btnBack = document.getElementById('btn-back');
  var btnNext = document.getElementById('btn-next');
  btnBack.disabled = quiz.isFirst;
  btnNext.textContent = quiz.isLast ? 'See My Results →' : 'Next →';
  btnNext.disabled = !quiz.hasAnsweredCurrent;
}

function renderQuestion(quiz) {
  var q = quiz.currentQuestion;
  var selectedIndex = (q.id in quiz.answers) ? quiz.answers[q.id] : null;

  // Stage accent class on card
  var quizCard = document.getElementById('quiz-question-card');
  quizCard.className = 'card question-card stage-' + q.stage;

  // Progress bar
  var pct = Math.round((quiz.currentIndex / quiz.total) * 100);
  document.getElementById('quiz-progress-fill').style.width = pct + '%';
  document.getElementById('quiz-progress-label').textContent = pct + '%';
  document.getElementById('quiz-counter').innerHTML =
    '<strong>' + quiz.currentStageLabel + '</strong> &middot; ' +
    (quiz.currentIndex + 1) + ' / ' + quiz.total;

  // Options HTML
  var optionsHtml = q.options.map(function(opt, i) {
    var sel = (selectedIndex === i) ? ' selected' : '';
    return [
      '<button class="option' + sel + '" data-index="' + i + '" type="button">',
        '<span class="option-marker">' + opt.label + '</span>',
        '<span class="option-text">' + opt.text + '</span>',
      '</button>'
    ].join('');
  }).join('');

  quizCard.innerHTML =
    '<div class="question-number">Question ' + (quiz.currentIndex + 1) + ' of ' + quiz.total + '</div>' +
    '<div class="question-text">' + q.text + '</div>' +
    '<div class="options-list">' + optionsHtml + '</div>';

  // Attach option click handlers
  var options = quizCard.querySelectorAll('.option');
  for (var i = 0; i < options.length; i++) {
    (function(btn) {
      btn.addEventListener('click', function() {
        var idx = parseInt(btn.getAttribute('data-index'), 10);
        quiz.selectOption(idx);

        // Visual: mark selected immediately
        var all = quizCard.querySelectorAll('.option');
        for (var j = 0; j < all.length; j++) all[j].classList.remove('selected');
        btn.classList.add('selected');
        btn.querySelector('.option-marker').style.background = 'var(--color-primary)';
        btn.querySelector('.option-marker').style.borderColor = 'var(--color-primary)';
        btn.querySelector('.option-marker').style.color = 'var(--color-text-inverse)';

        updateNavButtons(quiz);

        // Auto-advance on all but last question
        if (!quiz.isLast) {
          setTimeout(function() {
            quiz.next();
            renderQuestion(quiz);
          }, 420);
        }
      });
    })(options[i]);
  }

  updateNavButtons(quiz);
}

// ── Results helpers ───────────────────────────────────────

function bindResultsActions(quiz) {
  var btnRetake = document.getElementById('btn-retake');
  var btnShare  = document.getElementById('btn-share');

  if (btnRetake) {
    btnRetake.addEventListener('click', function() {
      quiz.reset();
      showScreen('landing');
    });
  }

  if (btnShare) {
    btnShare.addEventListener('click', function() {
      if (navigator.share) {
        navigator.share({ title: 'My Oracle Archetype', url: window.location.href });
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href).then(function() {
          alert('Link copied to clipboard!');
        });
      }
    });
  }
}

// ── App init ──────────────────────────────────────────────

function initApp() {
  var quiz = new Quiz({
    onComplete: function(scores) {
      showScreen('processing');
      setTimeout(function() {
        showScreen('results');
        renderResults(scores, document.getElementById('screen-results'));
        bindResultsActions(quiz);
      }, 2400);
    }
  });

  // All "start quiz" buttons
  var startBtns = document.querySelectorAll('.js-start-quiz');
  for (var i = 0; i < startBtns.length; i++) {
    (function(btn) {
      btn.addEventListener('click', function() {
        showScreen('quiz');
        renderQuestion(quiz);
      });
    })(startBtns[i]);
  }

  // Smooth nav scroll
  var anchors = document.querySelectorAll('a[href^="#"]');
  for (var j = 0; j < anchors.length; j++) {
    (function(a) {
      a.addEventListener('click', function(e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    })(anchors[j]);
  }

  // Quiz nav buttons
  document.getElementById('btn-next').addEventListener('click', function() {
    if (quiz.isLast && quiz.hasAnsweredCurrent) {
      quiz.next();
    } else if (!quiz.isLast) {
      quiz.next();
      renderQuestion(quiz);
    }
  });

  document.getElementById('btn-back').addEventListener('click', function() {
    quiz.back();
    renderQuestion(quiz);
  });
}

// ── Boot ──────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', initApp);
