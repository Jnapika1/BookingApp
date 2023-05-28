const path = require('path');


const express = require('express');

const bookController = require('../controllers/book');

const router = express.Router();

router.get('/', bookController.getBook);

router.post('/', bookController.postBook);

router.delete('/:id', bookController.getDeleteID);

module.exports = router;
