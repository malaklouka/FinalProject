const express = require('express');
const filterrouter = express.Router();
const filterController = require('../controllers/filter');

filterrouter.get('/', filterController.getNewBags);
filterrouter.post('/search', filterController.searchByQueryType);

module.exports = filterrouter;