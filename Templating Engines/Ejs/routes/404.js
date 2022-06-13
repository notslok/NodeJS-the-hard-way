const express = require('express');

const router = express.Router();

const controller = require('../controller/error');

router.use(controller.throwErr);

module.exports.anomaly=router;