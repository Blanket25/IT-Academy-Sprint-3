const Player = require("./Player");
const Game = require("./Game");

//Se crea un juego nuevo
const someGame = new Game();

//jugadores
const player1 = "Juan";
const player2 = "José";
const player3 = "Ana";
const player4 = "Laura";

someGame.addPlayer(new Player(player1));
someGame.addPlayer(new Player(player2));
someGame.addPlayer(new Player(player3));
someGame.addPlayer(new Player(player4));

//cada participante juega y gana puntos
someGame.round();

//se muestra el nombre del ganador
someGame.showWinner();
