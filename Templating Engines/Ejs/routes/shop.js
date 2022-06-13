const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

const controller = require('../controller/product');

router.get('/', controller.getProducts);

module.exports = router;
