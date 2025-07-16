const express = require('express');
const app = express();


///////////////////////////////////////////////////////////
// Set view engine to EJS
app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Index' });
});

app.get('/sqlwork', (req, res) => {
    res.render('sqlwork', { title: 'Work - SQL' });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
///////////////////////////////////////////////////////////



