/*const app = require('./app');
//require('./database');
/*require('./DBUtil');
require('./DBUtil_user');
require('./DB_sqlServer');
require('./controllers/verifyToken');
async function init() {
    await app.listen(3000);
    console.log('Server on port 3000');
}
console.log('inicializado');

init();*/

const express = require('express');
const app = express();
app.get('/', async(req, res) => {
    console.log('ingreso')
    res.send('Hello world with express!');
});

app.listen(3000)
console.log('server on port 3000')