import express from "express";
import connectToDb from "./database/db.js";
import dotenv from "dotenv"

const app = express()
const port = 3001;

dotenv.config()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

connectToDb(USERNAME,PASSWORD)
