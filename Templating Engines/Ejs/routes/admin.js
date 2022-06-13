const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const controller = require('../controller/product');

// const products = [];

// /admin/add-product => GET
router.get('/add-product', controller.getProductAdd);

// /admin/add-product => POST
router.post('/add-product', controller.putProduct);

exports.routes = router;

