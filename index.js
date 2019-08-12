const express = require('express');
const db = require('./db/db')
const app = express()
// get all data
app.get('/data', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'data retrieved successfully',
    data: db
  })
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});