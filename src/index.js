const app = require('./app');
//require('./database');
/*require('./DBUtil');
require('./DBUtil_user');
require('./DB_sqlServer');
require('./controllers/verifyToken');*/
async function init() {
    await app.listen(3008);
    console.log('Server on port 3008');
}


init();