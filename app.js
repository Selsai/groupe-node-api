const express = require('express');
const app = express();
const port = 3000;

// Middleware JSON (utile si tu ajoutes des routes POST plus tard)
app.use(express.json());

// Route racine
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Route GET /users
app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});