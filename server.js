const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// BodyParser Middleware

app.use(bodyparser.json());

// DB Config

const db = require('./config/keys').mongoURI;

mongoose
.connect(db,{ useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log(`MongoDB Connected...`))
.catch(err => console.log(err));

// Routes

app.use('/api/items',items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at ${port}`));

