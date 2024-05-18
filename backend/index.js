const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/auth');

const app = express();
app.use(express.json());
app.use(authRoutes);

const PORT = process.env.PORT || 3000;
const DB = process.env.DB;

mongoose.connect(DB)
    .then(() => {
        console.log('MongoDB is connected');
    })
    .catch((e) => {
        console.log(e);
    });

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

