var express = require('express');
var router = express.Router();
const sqlconnect = require('../utils/connection');

var result;
/* GET home page. */
router.get('/', function(req, res, next) {
  sqlconnect.query('SELECT * FROM productos', function (err, result){
    console.log(result);
    if(err){
     
      console.error(err);
      res.render('error');
    }
    
  })
  res.render('index', { title: 'Express' , products: result});
});

module.exports = router;
