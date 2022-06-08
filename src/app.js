const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
 
app.use('/', require('./routes/users'));
app.use('/', require('./routes/articulosFamilias'));
app.use('/', require('./routes/articulos'));
 
module.exports = {
    app,
    PORT
};
