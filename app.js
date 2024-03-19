// Student Name: Sharath Payili
// Student ID: 1225905683
// Date: 02/02/2024

const express = require('express');
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs')

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000")
});

// Server the form
app.get('/', (req, res) => {
    res.render('form');
});

// Handle form submissions
app.post('/submit', (req, res) => {
    console.log(req.body); // to log form data to console
    res.redirect('/');
});

app.use(express.urlencoded({ extended: true }));