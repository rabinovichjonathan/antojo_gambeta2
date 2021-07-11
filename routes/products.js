
var express = require('express');
var router = express.Router();

/* GET contact listing. */
router.get('/', function(req, res, next) {
    res.render('productos.hbs', { title: 'Listado de productos' });
});

module.exports = router;