const express = require('express');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

const path = require('path');


const expressLayouts = require('express-ejs-layouts');

let db = require('./config/mongoose');

// data parser
app.use(express.json());

app.use(cookieParser());
// making static files accessible
app.use(express.static('./assets'));



// extract style and scripts from sub pages into the layout
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// setting up Views engine as ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use('/', require('./router'));

app.listen(port, function(err){

    if(err){
        console.log('Error in starting up the Server : ', err);
        return;
    }

    console.log('Server is up and running at port : ', port);
});