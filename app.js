const express = require('express');
const app = express();
const port = 3000;

// Middleware JSON obligatoire pour lire req.body
app.use(express.json());

// Route racine
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Route POST /users
app.post('/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json({
    message: 'Nouvel utilisateur ajouté',
    user: newUser
  });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});