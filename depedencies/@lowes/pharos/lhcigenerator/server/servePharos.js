const express = require('express');
const path = require('path');

const app = express({ strict: true });

app.use('/', express.static(path.join(__dirname, '../../build/public/')));;

const server = app.listen('28000');
module.exports = { app, server };
