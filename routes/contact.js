

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Verbos http -> get / post / etc...
router.get('/', function (req, res) {
    // send -> string
    // render -> archivos
    //res.send("Esta la seccion contacto!")   
    
    res.render('contacto.hbs', { title: "Contacto" })

})
    router.post('/', function(req, res) {
    console.log(req.body.nombre);
    console.log(req.body.email);
    console.log(req.body.telefono); 
    console.log(req.body.mensaje);   
    
    let nombreForm, emailForm, telefonoForm, mensajeForm
    nombreForm = req.body.nombre
    emailForm = req.body.email
    telefonoForm = req.body.telefono
    mensajeForm = req.body.mensaje    
    
    //podemos hacer una verificación    
    if (nombreForm == "" || emailForm == "" || mensajeForm == "") {
        let validacion = "Faltan datos para completar - Favor llenar el Formulario"
        res.render('contacto.hbs', {
            validacion,
            nombreForm,
            emailForm,
            telefonoForm,
            mensajeForm
        });
    } else {
        async function main() {
            let tranporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // use TLS
                auth: {
                    user: "rabinovichjonathan@gmail.com",
                    pass: "mzuvtrlaqqcaqcus"
                }
            });           
             let info = await tranporter.sendMail({
                from:`${nombreForm} <${emailForm}>`,
                to: "rabinovichjonathan@gmail.com",
                subject: "Nuevo Contacto de la web de Antojo y Gambeta",
                html: `Nombre: ${nombreForm} <br> Email: ${emailForm} <br> Teléfono: ${telefonoForm} <br> Mensaje: ${mensajeForm}`
            });            res.render('formEnviado.hbs', {
                nombreForm,
                emailForm,
                telefonoForm,
                mensajeForm,
                envio: true
            })
        }
        main().catch(console.error);
    }
})
module.exports = router