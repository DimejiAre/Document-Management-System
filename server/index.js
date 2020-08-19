const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Welcome to Document Management System')
})

app.listen(port, () => {
  console.log(`DMS listening at http://localhost:${port}`)
})