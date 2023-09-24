const express = require('express');
const mainController = require('../controller/main-controller');

const router = express.Router();

router.get('/ping', function(req, res){
   return res.status(200).json("pong") ;
});

router.get('/', mainController.getProjects );
router.use('/search', require('./search'));

module.exports = router;