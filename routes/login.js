var express = require('express');
var router = express.Router();
const sqlconnect = require('../utils/connection').pool;



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

    
    console.log(`SELECT * FROM usuarios WHERE email = '${emailForm}' AND password = '${passwordForm}'`);
   
    console.log("prueba");
    sqlconnect.query(`SELECT * FROM usuarios WHERE email = '${emailForm}' AND password = '${passwordForm}'`
    ,(error, result) => {
       
        if (error) {
            console.error(error);
            return;
        }
        if(result.length>0){
            res.render('login_success', { message: 'El usuario se ha logeado exitosamente', data:result[0] });
            console.log(result);
            return;
        
        }
         res.render('login.hbs', { message: 'Usuario o contraseña incorrectos. Vuelva a intentar'});
         console.log('no entre');
         return;
         
            
    });

});  

module.exports = router;
