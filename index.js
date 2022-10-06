const express = require("express")
const mysql = require("mysql2")

const app = express()

const mysqlConfig = {
  host: "mysql_server",
  user: "root",
  password: "password",
  database: "express_mysql",
  port: 3306
}

let db

app.get("/", (req, res) => {
  res.send("<h1>Dockerized API</h1>")
})

app.post("/connect", (req, res) => {
  db = mysql.createConnection(mysqlConfig)

  db.connect((err) => {
    if (err) {
      console.log(err)
      return res.status(500).send("MySQL error")
    } else {
      console.log("MySQL Connection successful...")
      return res.status(200).send("MySQL connected")
    }
  })
})

app.listen(2001, () => {
  console.log("Listening in port", 2001)
})