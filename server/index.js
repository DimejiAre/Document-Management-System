require('dotenv').config();
const express = require('express');

const app = express();
const port = 5000;

const authRouter = require('./routers/authRouter');

app.use(express.json());
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Document Management System');
});

app.listen(port, () => {
  console.log(`DMS listening at http://localhost:${port}`);
});
