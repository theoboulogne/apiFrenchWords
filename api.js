const PORT = process.env.PORT || 3000;

const express = require('express')
const app = express()

app.get('/mots', (req, res) => {
  res.status(200).json(["test"])
})

app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});
