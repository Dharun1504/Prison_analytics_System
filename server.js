const express = require('express');
const connectDB = require('./backend/db');
//const colors = require('colors');
//const morgan = require('morgan');
//const dotenv = require('dotenv');
//const connectDB = require('./backend/db');
    
//dotenv
//dotenv.config();  

//mongodb
connectDB();

//REST
const app = express();

//MiddleWare
app.use(express.json());

app.use('/api/v1/prisoners', require('./Routes/prisonerRoutes'));

app.use('/api/v2/prisons', require('./Routes/prisonRoutes'));
app.use('/api/prisondetails',require('./Routes/prisondetailsRoutes'))
const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log('Server Running',port);
});

//listen
