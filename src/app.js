const express = require('express');
const emailRoutes = require('./routes/emailRoutes');

const app = express();

app.use(express.json());

app.use('/api/email', emailRoutes);

app.listen(3000, () => {
    console.log('Email Service running on port 3000');
});