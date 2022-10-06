const express = require("express")
const mysql = require("mysql2")

const app = express()

app.get("/", (req, res) => {
  res.send("<h1>Dockerized API</h1>")
})

app.listen(2001, () => {
  console.log("Listening in port", 2001)
})