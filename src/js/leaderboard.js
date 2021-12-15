const gameID = 'jy7H24VNgMhDXHdXJ4Sz';

class Leaderboard {
  #gameID;

  #baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

  constructor(gameID) {
    this.#gameID = gameID;
  }

  async fetchScores() {
    try {
      const response = await fetch(
        `${this.#baseUrl}games/${this.#gameID}/scores/`,
      );

      if (!response.ok) throw new Error('Failed to fetch');

      return response.json();
    } catch (error) {
      return error;
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
        },
      );

      if (!response.ok) throw new Error('bad request');

      return response.json();
    } catch (error) {
      return error;
    }
  }

  async getScores() {
    try {
      const { result: scoreBoard } = await this.fetchScores();
      scoreBoard.sort((score1, score2) => score2.score - score1.score);
      return scoreBoard;
    } catch (error) {
      return error;
    }
  }
}

const leaderboard = new Leaderboard(gameID);

export default leaderboard;
