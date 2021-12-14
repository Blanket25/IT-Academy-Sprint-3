let instance = null;

class Marcador {
  constructor() {
    this.scores = [];
  }
  static getInstance() {
    if (!instance) {
      instance = new Marcador();
    }
    return instance;
  }
}

module.exports = Marcador;
