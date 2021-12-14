const Marcador = require("./Marcador");

class Game {
  constructor() {
    this.players = [];
    this.marcador = Marcador.getInstance();
  }

  addPlayer(player) {
    this.players.push(player);
    console.log(`The player ${player.name} has joinned the game`);
  }

  round() {
    this.players.forEach((player) => {
      let scoreObj = { player: player.name, score: player.play() };
      this.marcador.scores.push(scoreObj);
    });
    console.log(`the score board: ${JSON.stringify(this.marcador.scores)}`);
  }

  showWinner() {
    let sortedScores = this.marcador.scores.sort((a, b) => b.score - a.score);
    let winner = sortedScores[0];
    console.log(`And the winner is...${winner.player}`);
  }
}

module.exports = Game;
