const express = require('express');
const app = express();
const port = 3000;

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

// Route POST /users
app.post('/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json({
    message: 'Nouvel utilisateur ajouté',
    user: newUser
  });
});

// Route DELETE /users/:id
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Utilisateur ${userId} supprimé` });
});

// Gestion des routes inexistantes
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
