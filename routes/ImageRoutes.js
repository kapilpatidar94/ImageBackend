const express = require('express');
var router = express.Router();
const ImageApi = require('../controllers/ImageApi')


router.route('/')
.get(ImageApi.get)
.post(ImageApi.add)
.patch(ImageApi.update)


module.exports = router;
