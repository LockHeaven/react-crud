const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Mongo DB is Conected');
});


const ciudadRouter = require('./routes/ciudad');
const documentoRouter = require('./routes/documento');
const personaRouter = require('./routes/persona');

app.use('/ciudad', ciudadRouter);
app.use('/documento', documentoRouter);
app.use('/persona', personaRouter);


app.listen(port, () => {
    console.log(`Server is runing on port ${port}`);
});