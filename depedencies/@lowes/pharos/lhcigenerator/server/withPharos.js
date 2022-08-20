const express = require('express');
const path = require('path');

const app = express({ strict: true });

app.use('/css/index.css', express.static(path.join(__dirname, '../client/css/index.css')));
app.use('/', express.static(path.join(__dirname, '../../build/public/')));
app.get('/withPharos.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/html/withPharos.html'));
});
const server = app.listen('22000');
module.exports = { app, server };
