const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = 3000;
const FILE_PATH = './contact-messages.json';

// Créer automatiquement le fichier s’il n'existe pas
if (!fs.existsSync(FILE_PATH)) {
  fs.writeFileSync(FILE_PATH, '[]', 'utf8');
  console.log('✅ contact-messages.json created');
}

app.use(cors());
app.use(bodyParser.json());

// Enregistrer un message (POST)
app.post('/api/contact', (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.message) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  const newMessage = {
    id: Date.now(),
    ...req.body,
    date: new Date().toISOString()
  };

  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    let messages = [];
    if (!err && data) {
      try {
        messages = JSON.parse(data);
      } catch (parseErr) {
        console.error('Invalid JSON in contact-messages.json');
      }
    }

    messages.push(newMessage);

    fs.writeFile(FILE_PATH, JSON.stringify(messages, null, 2), (err) => {
      if (err) {
        console.error('Error writing message:', err);
        return res.status(500).json({ success: false, error: 'Failed to save message' });
      }

      res.json({ success: true, message: 'Message saved!' });
    });
  });
});

// Voir les messages enregistrés (GET)
app.get('/api/contact', (req, res) => {
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Could not read file' });
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
