const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const router = express.Router();
const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use('/dni', require('./controllers/dniController'));

app.get('/api2', async(req, res) => {
    const opts = {
        method: 'POST',
        headers: {
            Authorization: 'websalud.minsa.gob.pe',
            origin: 'https://websalud.minsa.gob.pe',
            referer: 'https://websalud.minsa.gob.pe/hisminsa/',
            cookie: 'JSESSIONID=02C0B477B171D87CFD42291591CCAECF; __cfduid=d44fda4103e0848d142bceac76d89d3ce1582836579; byt=49d00baf1011a628358639fd879d4c0e27cd3977d977192cd3c68f5cc2fa5766f5a1e9435b04f80e574e60ad28d00202065677139ae5bce00e88f7ca7c7ff07570ee39a38a1dd8d24b64d00ecbfb8c353be5b6ade99dea75; dtCookie=3%248E079C31D4D58EDB13E1F61DC5F4447F'
        }
    };

    var response = await fetch('https://websalud.minsa.gob.pe/hisminsa/his/paciente?C=PACIENTE&S=INFOGETBYID&idtipodoc=1&numdoc=44828211', opts)
        //https://websalud.minsa.gob.pe/hisminsa/his/paciente?C=PACIENTE&S=INFOGETBYIDRENIEC&idtipodoc=1&numdoc=44572619
    const body = await response.json()

    res.send(body);
});

app.get('/', async(req, res) => {

    res.send('hola');
});

module.exports = app;