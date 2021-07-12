const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("samooo levski");
});

app.listen(3001, () => {
  console.log("runing on 3001");
});
