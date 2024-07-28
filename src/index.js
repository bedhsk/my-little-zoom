const https = require('./app.js');
const fs = require('fs');


https.listen(3000, () => {
    console.log('Server on port 3000');
})