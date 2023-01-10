const express = require("express"); //? returns a function
const users = require("./users");
const app = express(); //? returns an object

app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({
      data: null,
      message: "user with given id was not found",
    });
  }
  res.json({
    data: user,
    message: "ok",
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
