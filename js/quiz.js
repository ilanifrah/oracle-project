// Global Quiz class — uses QUESTIONS and STAGE_LABELS globals from questions.js

function Quiz(options) {
  this.questions = QUESTIONS;
  this.currentIndex = 0;
  this.answers = {};
  this.scores = {};
  this.onComplete = options.onComplete;
}

Object.defineProperties(Quiz.prototype, {
  currentQuestion: { get: function() { return this.questions[this.currentIndex]; } },
  total:           { get: function() { return this.questions.length; } },
  progress:        { get: function() { return this.currentIndex / this.questions.length; } },
  isFirst:         { get: function() { return this.currentIndex === 0; } },
  isLast:          { get: function() { return this.currentIndex === this.questions.length - 1; } },
  hasAnsweredCurrent: {
    get: function() { return this.currentQuestion.id in this.answers; }
  },
  currentStageLabel: {
    get: function() { return STAGE_LABELS[this.currentQuestion.stage] || ''; }
  }
});

Quiz.prototype.selectOption = function(optionIndex) {
  var question = this.currentQuestion;
  var option = question.options[optionIndex];

  // Undo previous answer's score if re-selecting
  if (question.id in this.answers) {
    var prev = question.options[this.answers[question.id]];
    this.scores[prev.type] = (this.scores[prev.type] || 1) - 1;
  }

  this.answers[question.id] = optionIndex;
  this.scores[option.type] = (this.scores[option.type] || 0) + 1;
};

Quiz.prototype.next = function() {
  if (!this.hasAnsweredCurrent) return false;
  if (this.isLast) {
    this.onComplete(this.scores);
    return true;
  }
  this.currentIndex++;
  return true;
};

Quiz.prototype.back = function() {
  if (this.isFirst) return false;
  this.currentIndex--;
  return true;
};

Quiz.prototype.reset = function() {
  this.currentIndex = 0;
  this.answers = {};
  this.scores = {};
};
