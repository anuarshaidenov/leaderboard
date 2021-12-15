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
    return `<li class="board__score">${score.user}: ${score.score}</li>`;
  }

  renderLoadingMessage() {
    this.#scoresContainer.innerHTML = 'Loading...';
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
