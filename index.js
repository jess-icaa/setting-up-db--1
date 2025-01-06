const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3010;

app.use(express.static('static'));

mongoose
.connect(process.env.MONGO_URI, {useNewURLParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to Database"))
.catch((error) => {
  console.error("Error connecting to database", error.message);
  process.exit(1);
});

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
