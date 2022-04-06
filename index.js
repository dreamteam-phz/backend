const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const {host, port} = require('./config.json');
const routes = require('./routes/routes.js');
require('dotenv').config();
const mongoString = process.env.DATABASE_URL;

//connect the database in MongoDB to the express server
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error' , (error) => {
    console.log(error);
});
database.once('connected', () => {
    console.log('Database Connected');
    // console.log(database)
});

//build up our middleware
const app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api',routes);
app.use(cors({
    origin:'*'
}));

app.listen((host,port), ()=>{console.log(`Server listening at ${host}:${port}`)});