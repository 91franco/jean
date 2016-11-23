var express = require('express');
var router = express.Router();//{mergeParams:true}



router.get('/perros', (req, res, next) => {
    res.download("./pdf/perros.pdf");
});


module.exports = router;