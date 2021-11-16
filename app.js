const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const app = express();

const CategorySchema = require('./server/models/CategorySchema');
const port = process.env.PORT || 3000;

require('dotenv').config();

//Middleware
app.use(express.urlencoded( {extended: true} ));
app.use(express.static('public')); 
app.use(expressLayouts);

app.set('layout', './layouts/main'); 
app.set('view engine', 'ejs');

const routes = require('./server/routes/recipeRoutes');
app.use('/', routes);

app.listen(port, () => console.log(`Listening on ${port}`));