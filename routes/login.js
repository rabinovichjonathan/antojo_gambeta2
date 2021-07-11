var express = require('express');
var router = express.Router();
const sqlconnect = require('../utils/connection');



router.get('/', function(req, res, next){
    res.render('login.hbs', { title: "login" })
    
});


//

router.post('/', (req, res, next) => {
    const body = req.body;
    console.log(body.email);
    console.log(body.password);
    var emailForm, passwordForm
    emailForm = body.email;
   passwordForm   = body.password;

 
   
   router.get('/', function(req, res) {
    
    sqlconnect.query(`SELECT * FROM usuarios WHERE email = ${emailForm} AND password = ${passwordForm}'`
    ,(error, result) => {
       console.log(result);
        if (error) {
            console.error(error);
            return res.render({ message: 'Error inesperado'});
        }
        if(result.length>0){
           return res.render('login.hbs', { message: 'El usuario se ha logeado exitosamente', data:result });
            
        }
        return res.render('login.hbs', { message: 'Usuario o contraseña incorrectos. Vuelva a intentar'});
            
    });
 })

});  

module.exports = router;