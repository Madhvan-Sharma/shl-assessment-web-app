const express = require('express');
const searchController = require('../controller/search-controller');

const router = express.Router();

router.get('/search-all', searchController.fetchSearchResults);

module.exports = router;