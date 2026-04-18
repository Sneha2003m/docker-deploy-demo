const express = require('express');
const mysql = require('mysql2');
const app = express();

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'myapp'
});

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'App is running! 🚀',
    timestamp: new Date() 
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/db', (req, res) => {
  db.query('SELECT 1 + 1 AS result', (err, results) => {
    if (err) return res.status(500).json({ error: 'DB connection failed', details: err.message });
    res.json({ db: 'connected ✅', result: results[0].result });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));