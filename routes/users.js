var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.send('respond with a resource'); 
});

router.get('/:id', function(req,res,next){

  res.json(users.filter(user => user._id == parseInt(req.params.id)));
});

module.exports = router;
