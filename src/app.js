const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//setup public folder
//app.use(express.static('./public'));
/*app.use(express.static(path.join(__dirname, 'public')));
app.use('/util', require('./controllers/utilController'));
app.use('/paciente', require('./controllers/pacienteController'));
app.use('/servicio', require('./controllers/servicioController'));
app.use('/consultorio', require('./controllers/consultorioController'));
app.use('/moviHiscli', require('./controllers/moviHiscliController'));
app.use('/rpt', require('./controllers/reportController'));*/
app.use('/dni', require('./controllers/dniController'));
module.exports = app;