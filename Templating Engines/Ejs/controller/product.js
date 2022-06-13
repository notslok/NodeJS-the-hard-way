const products = [];

module.exports.getProducts = (req, res, next) => {
                                // const products = adminData.products;
                                res.render('shop', {
                                prods: products,
                                pageTitle: 'Shop',
                                path: '/',
                                hasProducts: products.length > 0,
                                activeShop: true,
                                productCSS: true
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
                                                products.push({ title: req.body.title });
                                                res.redirect('/');
                            };
// shifted to error.js
// module.exports.throwErr = (req, res, next) => {
//                                                 res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/'});
//                             };