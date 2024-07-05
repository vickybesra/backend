const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('I am  on  twitter')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})