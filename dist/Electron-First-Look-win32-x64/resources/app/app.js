const express = require('express');
const open = require('open');

const app = express();
const port = 3000;

app.use(express.static('public')); // Serve HTML from 'public' folder

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  open(`http://localhost:${port}`);
});
