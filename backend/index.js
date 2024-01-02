require('dotenv').config();
const express = require('express');
const connectDatabase = require('./config/database');

const PORT = process.env.SERVER_PORT;

const app = express();
connectDatabase();

app.listen(() => {
    console.log(`Server started on port: ${PORT}`);
});