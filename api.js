const PORT = process.env.PORT || 3000;

const express = require('express')
const app = express()

app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});

app.get('/mots', (req,res) => {
    res.status(200).json(["test"])
})
