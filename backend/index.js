const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/auth');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(authRoutes);

const PORT = process.env.PORT || 3000;
const DB = process.env.DB;

mongoose.connect(DB).then(()=>{
    console.log('MongoDB is Connected ');
}).catch((e)=>{
    console.log(e);
});

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
});
