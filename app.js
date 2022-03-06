import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';
dotenv.config()

/*
  *參考
  *https://github.com/john-smilga/node-express-course/blob/main/03-task-manager/final/app.js
  */

const app = express();
const port = process.env.PORT || 8000;

app.get('/', function (req, res) {
  res.send('Hello World!')
})

connectDB(process.env.MONGO_URI);

app.listen(port, function () {
  console.log(`Server running on port ${port}!`);
})
