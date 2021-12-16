/* eslint-disable operator-linebreak */
const scoresContainer = document.getElementById('scores');

class LeaderboardView {
  #scoresContainer;

  constructor(scoresContainer) {
    this.#scoresContainer = scoresContainer;
  }

  #clearScoresContainer() {
    this.#scoresContainer.innerHTML = '';
  }

  static generateScoreMarkup(score) {
    return `<li class="scoreboard__item">${score.user} <span>${score.score}</span></li>`;
  }

  renderLoadingMessage() {
    this.#scoresContainer.innerHTML =
      '<li class="scoreboard__item">Loading...</span></li>';
  }

  renderErrorMessage() {
    this.#scoresContainer.innerHTML =
      '<li class="scoreboard__item">FAILED TO FETCH❗️</span></li>';
  }

  renderScores(scores) {
    this.#clearScoresContainer();
    scores.forEach((score) => {
      const scoreMarkup = LeaderboardView.generateScoreMarkup(score);
      this.#scoresContainer.insertAdjacentHTML('beforeend', scoreMarkup);
    });
  }
}

const leaderboardView = new LeaderboardView(scoresContainer);

export default leaderboardView;
