const EventEmitter = require("events");

const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer 1
celebrity.on("race win", () => {
  console.log("Congratulations you are the best");
});

// Subscribe to celebrity for Observer 2
celebrity.on("race win", () => {
  console.log("Boo I could have done better than that");
});

console.log(celebrity);
