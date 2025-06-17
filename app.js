const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Gestion des routes inconnues
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
