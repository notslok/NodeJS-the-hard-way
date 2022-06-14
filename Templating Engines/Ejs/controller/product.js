// const products = []; --> implimentaion logic shifted to models dir

const Product = require('../models/product');

module.exports.getProducts = (req, res, next) => {
                                // const products = adminData.products;
                                Product.fetchAll(products => {
                                    // console.log(products);
                                    res.render('shop', {
                                        prods: products,
                                        pageTitle: 'Shop',
                                        path: '/',
                                        hasProducts: products.length > 0,
                                        activeShop: true,
                                        productCSS: true
                                    });//will work as fetchAll is static and belongs to the class not any single instance
                                });
                            };
module.exports.getProductAdd = (req, res, next) => {
                                res.render(
                                            'add-product', 
                                            { 
                                                pageTitle: 'Add Product', 
                                                path: '/admin/add-product', 
                                                formsCSS: true, 
                                                productCSS: true, 
                                                activeAddProduct: true 
                                            });
                            };
module.exports.putProduct = (req, res, next) => {
                                                const product = new Product(req.body.title);
                                                product.save();
                                                // console.log(req.body.title);
                                                // products.push({ title: req.body.title });
                                                res.redirect('/');
                            };
// shifted to error.js
// module.exports.throwErr = (req, res, next) => {
//                                                 res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/'});
//                             };