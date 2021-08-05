const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('OMO');
});

app.listen(3065, () => {
    console.log('running server');
});