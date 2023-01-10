const EventEmitter = require("events"); //? returns a class

const emitter = new EventEmitter();

//? event
emitter.on("bell", () => {
  console.log("open the door");
});

emitter.emit("bell"); //? call the event
