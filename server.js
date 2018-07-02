const express = require('express');

const app = express();
const port = process.env.PORT || 4444;

app.get('/api/hello', (req, res) => {
  res.send({ hello: 'world' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
