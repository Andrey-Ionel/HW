/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const express = require('express');

const app = express();
const port = 7777;

app.get('/', (req, res) => {
  res.send('Hello server Express!');
});

app.use(express.static('public'));

app.get('/user', (req, res) => {
  const user = [
    {
      age: 37,
      name: 'Andrey',
    },
  ];
  res.send(user);
});

app.post('/user', function (req, res) {
  const newUser = {
    age: 27,
    name: 'Vanya',
  };

  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
