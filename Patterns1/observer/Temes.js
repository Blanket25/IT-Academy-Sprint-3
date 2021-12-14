var events = require("events");
var eventEmitter = new events.EventEmitter();

class Temes {
  constructor() {
    this.comments = [];
  }

  addComment(comment) {
    //adds a comment
    this.comments.push(comment);

    // notifies users
    this.notifyComment(comment);
  }

  //subscribe users to a topic.
  subscribe(user) {
    eventEmitter.on("event", user.update);

    console.log(`new subscriber added: ${user.username}`);
  }

  notifyComment(comment) {
    eventEmitter.emit("event", comment);
  }
}

module.exports = Temes;
