
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../app/index.html'));
});
app.get('/hi', (req,res) => {
    res.send("Hello");
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + '/../app/index.html'));
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server listening on port', PORT);
    console.log('Visit: https://localhost:8080/ to browse app');
});
