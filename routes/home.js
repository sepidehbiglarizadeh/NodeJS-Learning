const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home",{name:"Test"});
});

module.exports=router;