const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Route DELETE /users/:id
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Utilisateur ${userId} supprimé` });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
