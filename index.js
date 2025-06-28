// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from CI/CD Express API!');
});
app.get('/axelganteng', (req, res) => {
  res.send('Axel adalah orang terganteng, iya ganteng banget');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
