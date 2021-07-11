var express = require('express');
var router = express.Router();
const sqlconnect = require('../utils/connection');

router.get('/sign_in', (req, res) => {
  res.render('sign_in.hbs');
});
router.post('/create-user', (req, res) => {
  const persona = req.body;
  if (!persona.nombre) {
    return res.render('error');
  }  sqlconnect.query(`
    INSERT INTO \`usuarios\` (\`email\`, \`password\`, \`nombre_usuario\` , \`apellido_usuario\`, \`domicilio_usuario\`) 
    VALUES ('${persona.email}', '${persona.password}', '${persona.nombre}', '${persona.apellido}', '${persona.domicilio}');
    `,
    (err, result) => {
     console.log(result);
      if (err) {
        console.error(error);
        return res.render('error');
      }
      console.log(result);
      res.render('success', { nombre: persona.nombre, result });
    }
  );
});

module.exports = router;