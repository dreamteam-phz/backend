const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const {host, port} = require('./config.json');

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
    // console.log(database)
}); //end of database connection script

//build up our middleware
const app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api',routes);
app.use(cors({
    origin:'*'
}));
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
//end of middleware

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname,'index.html'));
// });

//const fetch = require('node-fetch');
// app.get('/databasecontent', (req,res) =>{
//     fetch('http://localhost:3000/api/getAll',{mode:'cors'})//GET is default method
//         .then(data => data.json())
//         .then(result => res.json(result))
//         .catch(error => res.json(error));
// })

app.listen((host,port), ()=>{console.log(`Server listening at ${host}:${port}`)});