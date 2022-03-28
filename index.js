const express = require('express');
const mongoose = require('mongoose');

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

const app = express();
const host  = 'https://localhost';
const port = 3000;

app.use(express.json());
app.use('/api',routes);

app.get('/', (req,res) => {
    res.send('Database is connected. Amazing!');
})

app.listen((host,port), ()=>{console.log(`Server listening at ${host}:${port}`)});