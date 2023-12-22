const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

// Add the following middleware to enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000'); // Update with your frontend origin

    console.log("here 1")


    // Preflight request
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check username and password (this is a basic example, replace with your authentication logic)
    if (username === 'Ryan' && password === 'Gosling') {
        const sessionId = uuidv4();
        res.json({ sessionId });
        console.log("succesfull login")
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(port, () => {
    console.log(`Login Service listening at http://localhost:${port}`);
});
