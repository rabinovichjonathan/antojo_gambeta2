var express = require('express');
var router = express.Router();
const sqlconnect = require('../utils/connection').pool;

/* GET contact listing. */
router.get('/', function(req, res, next) {
    sqlconnect.query(`SELECT * FROM productos WHERE destacado ='1' LIMIT 6`, function (err, results){
      /*console.log(results);*/
      if(err){
       
        console.error(err);
        res.render('error');
      }
      res.render('comprar.hbs', { title: 'Hacé tu pedido' , products: results});
    })
  });

module.exports = router;