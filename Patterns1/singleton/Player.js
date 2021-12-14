class Player {
  constructor(name) {
    this.name = name;
  }
  play() {
    return Math.floor(Math.random() * 10);
  }
}

module.exports = Player;
