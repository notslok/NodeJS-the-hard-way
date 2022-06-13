const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
const path = require('path');
const rootDir = require('./utils/path');//can be used in place of "__dirname" to fetch root folder path of the project, used in 404 routing
//
app.use(express.static(path.join(rootDir,"public")));//defining static routes, publicly available files like...stylesheets
//
app.use(bodyParser.urlencoded({extended: false}));//for automatic body parsing of all the incoming response bodies
app.use('/admin',adminRoutes); //filtering for routes beginnig with admin
app.use(shopRoutes);
//404
app.use((req,res,next) => {
    // res.status(404).send('<h1>404 - Page not found!</h1>');
    res.status(404).sendFile(path.join(rootDir,"views","404.html"));
});
app.listen(3000);