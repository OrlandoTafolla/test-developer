const express = require('express');
const morgan = require('morgan')
const app = express();
const mongoose = require('mongoose')

//Settings
app.set('port', process.env.PORT || 3000)
mongoose.connect('mongodb://localhost/test-database')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
//middlewares funciones que ayudan a procesar las URL 
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/employees', require('./routes/employees'));


//Static Files Archivos q se envian al frontENd
app.use(express.static(__dirname + '/public'))


//Server on listen
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})