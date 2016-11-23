var MongoClient = require( 'mongodb' ).MongoClient;
var express = require('express');
var app = express();
var descarga = require('./rutas/descarga');
var mascotas = require('./rutas/mascotas');
var bodyParser = require('body-parser');
var cors = require('cors');
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());
app.use(cors());
MongoClient.connect('mongodb://localhost:27017/prueba', (err, db) => {
    if (err)
        throw err;

    app.use((req, res, next) => {
        req.db = db.collection('prueba');
        next();
    });

    app.use((req,res,next) => {
        var date = Date();
        console.log('Fecha:',date);
        next();
    })

    app.use('/',descarga);
    app.use('/',mascotas);
    // app.get('/', (req, res, next) => {
    //     res.json({msj: "hola"});
    // });

    app.listen(3333, ()=>{
        console.log('Servidor iniciado...');
    });
});
