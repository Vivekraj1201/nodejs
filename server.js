const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT ||  5000;

app.use('/api/contacts', require('./routes/contactRoutes'));
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});