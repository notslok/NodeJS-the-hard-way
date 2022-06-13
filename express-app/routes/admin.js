const express = require('express');
const router = express.Router();

//under the hood: GET /admin/products  
router.post('/products',(req,res,next) => {
    // res.send('<html><body><h1>Here are the selected products:</h1></body></html>');
    console.log(req.body);//shows parsed body of the request coming from "/add-product" form
    res.redirect('/');// setting location : "/" with status code  of 302(redirect)
});

//under the hood: POST /admin/add-products
router.get('/add-products',(req,res,next) => {
    res.send(
        `<html>
            <body>
                <h1>Enter the product name, you want to add...</h1>
                <form action="/admin/products" method="POST">
                    <input type="text" name="product-name">
                    <button type="submit">Add Product</button>
                </form>
            </body>
        </html>`
    );
});

module.exports = router;