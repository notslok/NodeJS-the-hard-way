const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));//for automatic body parsing of all the incoming response bodies
app.use('/admin',adminRoutes); //filtering for routes beginnig with admin
app.use(shopRoutes);
//404
app.use((req,res,next) => {
    res.status(404).send('<h1>404 - Page not found!</h1>');
});
app.listen(3000);