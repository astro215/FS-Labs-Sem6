// index.js
const express = require('express');
const app = express();
const port = 4000;

const routeUrl = require('./routes/routes');
const cors = require('cors');

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sis');

app.use(express.json());
app.use(cors());
app.use('/app', routeUrl);

app.listen(4000, () => {
    console.log(`Server is running on port: ${port}`);
});
