
var express = require('express');
var router = express.Router();
/*const sqlconnect = require('../utils/connection');*/

/* GET contact listing. */
router.get('/', function(req, res, next) {
    sqlconnect.query(`SELECT * FROM productos WHERE destacado ='1' LIMIT 6`, function (err, results){
      console.log(results);
      if(err){
       
        console.error(err);
        res.render('error');
      }
      res.render('productos.hbs', { title: 'Listado de productos' , products: results});
    })
  });

module.exports = router;
