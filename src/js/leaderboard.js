/* eslint-disable comma-dangle */
const gameID = 'ccOqEXAN4wp5rkkNUUQ8';

class Leaderboard {
  #gameID;

  #baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

  constructor(gameID) {
    this.#gameID = gameID;
  }

  async fetchScores() {
    try {
      const response = await fetch(
        `${this.#baseUrl}games/${this.#gameID}/scores/`
      );

      if (!response.ok) throw new Error('Failed to fetch');

      return response.json();
    } catch (error) {
      return false;
    }
  }

  async addScore(user, score) {
    try {
      const scoreObject = { user, score };
      const response = await fetch(
        `${this.#baseUrl}games/${this.#gameID}/scores/`,
        {
          method: 'POST',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(scoreObject),
        }
      );

      if (!response.ok) throw new Error('bad request');

      return response.json();
    } catch (error) {
      return false;
    }
  }

  async getScores() {
    try {
      const { result: scoreBoard } = await this.fetchScores();
      if (!scoreBoard) throw new Error('Failed to fetch scores');

      scoreBoard.sort((score1, score2) => score2.score - score1.score);
      return scoreBoard;
    } catch (error) {
      return false;
    }
  }
}

const leaderboard = new Leaderboard(gameID);

export default leaderboard;
