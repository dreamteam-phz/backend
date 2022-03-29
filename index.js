const express = require('express');
const { render } = require('express/lib/response');
const mongoose = require('mongoose');
const path = require('path');

//import routes
const routes = require('./routes/routes.js');

//require the contents of our .env file
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
});

//end of database connection

//build up our middleware
const app = express();
const host  = 'https://localhost';
const port = 3000;
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api',routes);

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
})

app.listen((host,port), ()=>{console.log(`Server listening at ${host}:${port}`)});