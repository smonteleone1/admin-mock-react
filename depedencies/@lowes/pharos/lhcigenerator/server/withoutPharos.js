const express = require('express');
const path = require('path');

const app = express();

app.use('/css/index.css', express.static(path.join(__dirname, '../client/css/index.css')));
app.get('/withoutPharos.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/html/withoutPharos.html'));
});
app.listen('23000');
