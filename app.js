const express = require("express"); //? returns a function

const app = express(); //? returns an object

//* create an api
app.get("/", (req, res) => {
  res.send("Hello express");
});

app.get("/api/users", (req, res) => {
  res.send([
    { id: 1, name: "user1" },
    { id: 12, name: "user2" },
  ]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
