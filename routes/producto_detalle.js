var express = require('express');
var router = express.Router();
const sqlconnect = require('../utils/connection');

/* GET contact listing. */
router.get('/', function(req, res, next) {
    var producto_id = req.query.producto_id;
    sqlconnect.query(`SELECT * FROM productos WHERE producto_id = ${producto_id}`, function (err, results){
    console.log(results);
    res.render('producto_detalle.hbs', { title: results[0].producto, producto: results[0]});
    });
    sqlconnect.end();
});

module.exports = router;
