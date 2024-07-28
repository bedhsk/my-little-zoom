// Preparamos las rutas de nuestra aplicación
const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.redirect('index.html');
});

router.get('/res', (req, res) => {
    res.redirect('receptor.html');
});

module.exports = router;