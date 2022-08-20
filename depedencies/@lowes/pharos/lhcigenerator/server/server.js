const express = require('express');
const path = require('path');

const app = express();
const open = require('open');

const resultFolder = path.join(__dirname, '../lhci/.lighthouseci');
const lighthouserc = path.join(__dirname, '../lhci/lighthouserc.json');
const fs = require('fs');

const fileArr = [];
const totalRuns = JSON.parse(fs.readFileSync(lighthouserc)).ci.collect.numberOfRuns;
fs.readdir(resultFolder, (err, files) => {
    if (err) {
        return;
    }
    files.forEach((filename) => {
        const patt = /^lhr-.*\.json$/i;
        if (patt.test(filename)) {
            const logFileLines = fs.readFileSync(`${resultFolder}/${filename}`);
            fileArr.push(JSON.parse(logFileLines));
        }
    });
});
// fs.writeFile(path.join(__dirname,'./json/output.json'), function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

app.use('/index.js', express.static(path.join(__dirname, '../comparison/index.js')));
app.use('/style.css', express.static(path.join(__dirname, '../comparison/style.css')));
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../comparison/index.html'));
});
app.get('/output', (req, res) => {
    res.json({ totalRuns, output: fileArr });
});
app.listen('24000', () => {
    open('http://localhost:24000');
});
