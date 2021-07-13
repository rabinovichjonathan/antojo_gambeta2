var express = require('express');
var router = express.Router();
const mysql_pool = require('../utils/connection').pool;

var results;
/* GET home page. */
router.get('/', function(req, res, next) {
    mysql_pool.query(`SELECT * FROM productos WHERE destacado ='1' LIMIT 3`, function (err, results){
        /*console.log(results);*/
        if(err){
            console.error(err);
            res.render('error');
        }
        res.render('index', { title: 'Antojo y Gambeta web' , products: results});
    })        
    /*sqlconnect.end();*/
});

module.exports = router;
