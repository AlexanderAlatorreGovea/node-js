const EventEmitter = require("events");

const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer 1
celebrity.on("race win", (result) => {
  if (result === "win") {
    console.log("Congratulations you are the best");
  }
});

// Subscribe to celebrity for Observer 2
celebrity.on("race win", (result) => {
  if (result !== "win") {
    console.log("Boo you lost");
  }
});

// to emit the event
celebrity.emit("race win", "win");
celebrity.emit("race lost"); // no listeners for race lost
celebrity.emit("race win", "lost");

process.on("exit", (code) => {
  console.log("process exited with code:", code);
});

//console.log(celebrity);
