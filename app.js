
const express = require('express');
const bodyParser = require('body-parser');


const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');

const Port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use('/', shopRoutes);




app.listen( Port, ( ) => {
    console.log(`Server is running on port: ${Port}`); 
})