import '../styles/main.css';
import leaderboard from './leaderboard.js';
import leaderboardView from './views/leaderboardView.js';
import addScoreFormView from './views/addScoreFormView.js';

const addScoreForm = document.getElementById('add-score-form');
const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');
const refreshButton = document.getElementById('refresh');

const displayScoreboard = async () => {
  leaderboardView.renderLoadingMessage();
  const scores = await leaderboard.getScores();
  leaderboardView.renderScores(scores);
};

addScoreForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const user = nameInput.value;
  const score = +scoreInput.value;
  await leaderboard.addScore(user, score);

  addScoreFormView.clearInputFields();
  await displayScoreboard();
  addScoreFormView.focusOnNameInput();
  addScoreFormView.renderAddScoreMessage();
});

refreshButton.addEventListener('click', displayScoreboard);

displayScoreboard();
