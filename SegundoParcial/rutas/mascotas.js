var express = require('express');
var router = express.Router();//{mergeParams:true}

router.get('/mascotas', (req, res, next) => {

    req.db
    .find({},{'_id':0})
    .toArray((err, data) => {
        res.json(data);
    });
});

router.get('/mascotas/:raza', (req, res, next) => {
    
    req.db
    .find({'raza':req.params.raza},{'_id':0})
    .toArray((err, data) => {
        res.json(data);
    });
});

router.get('/mascotas/mayor/:edad', (req, res, next) => {
    
    req.db
    .find({'edad':{$gt:parseInt(req.params.edad)}},{'_id':0})
    .toArray((err, data) => {
        res.json(data);
    });
});

router.get('/mascotas/perros/menor/:peso', (req, res, next) => {
    
    req.db
    .find({'peso':{$lt:parseInt(req.params.peso)},'tipoAnimal':"Perro"},{'_id':0})
    .toArray((err, data) => {
        res.json(data);
    });
});

router.get('/mascotas/dueno/:dueno', (req, res, next) => {
     req.db
    .find({'dueno.nombre':req.params.dueno},{'dueno':0,'_id':0})
    .toArray((err, data) => {
        res.json(data);
    });
});

router.post('/mascotas/cargar', (req, res, next) => {
    
    req.db
    .insert(req.body);   
});

module.exports = router;