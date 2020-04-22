const conn = require('../bin/DBconection');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {

  conn.getConnection((err, conexion) => {
    if (err) {
      console.log('Error de conexion')
      res.send('Error de conexion')
    }else{
      sql = 'SELECT * FROM tAlumno'
      conn.query(sql,(err, resultado)=>{
        if (err){
          console.log('error en consulta')
          res.send('Error en consulta')
        }else{
          console.log(resultado)
          res.render('index',{title:'desde la BD',datos: resultado})
        }
      })
    }
  })

 // res.render('index', { title: 'Express' });
});

module.exports = router;
