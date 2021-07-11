var express = require('express');
var router = express.Router();

/* GET contact listing. */
router.get('/', function(req, res, next) {
    res.render('sobre_nosotros.hbs', { title: 'Sobre nosotros' });
});

module.exports = router;