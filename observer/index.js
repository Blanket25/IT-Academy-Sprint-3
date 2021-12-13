const Usuari = require("./Usuari");
const Temes = require("./Temes");
const Comment = require("./Comment");

//Caso 1
const Patterns = new Temes("Patterns");
const user1 = new Usuari("Juan");
const comment1 = new Comment(user1, "lalalalalalala");

Patterns.subscribe(user1);
Patterns.addComment(comment1);

//Caso 2
const Callbacks = new Temes("Callbacks");
const user2 = new Usuari("Leo");
const user3 = new Usuari("Laia");
const comment2 = new Comment(user2, "jajajaja");
const comment3 = new Comment(user3, "hello world");

Callbacks.subscribe(user2);
Callbacks.subscribe(user3);
Callbacks.addComment(comment2);
Callbacks.addComment(comment3);
