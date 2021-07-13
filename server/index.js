const express = require("express");
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
  database: "mydb",
});

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO `crud_app` (`firstName`, `lastName, email`, `telephone, gender`, `dob`) VALUES ('Lyubo', 'Dias', 'lyubomir@gmil.com', '0800828828', 'male', '01.01.2011')";
  db.query(sqlInsert, (err, result) => {
    res.send("Zdrasti Lyuboooo vkarahme noviq user");
  });
});

app.listen(3001, () => {
  console.log("runing on 3001");
});
