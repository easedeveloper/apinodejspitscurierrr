//REQUERIR Y EJECUTAR EL SERVIDOR
const express= require('express');
const bodyParser = require('body-parser');
//const PORT = process.env.PORT || 3050;

const cors = require(cors);

const app = express();
app.use(bodyParser.json());

//DEFINIENDO MIDDLEWARES
app.use( express.json() );

//DE FORMULARIO A OBJETO
app.use( express.urlencoded({ extended: true }) );

app.use( cors() );

// AÑADIENDO Routes DESDE ./routes/routesindex
app.use( require('./routes/routes-index') );

//EJECUTA EN EL PUERTO 3000
app.connect(error =>{
    if (error) throw error;
    console.log('Database server running!');
});
//app.listen( PORT, ()=> console.log(`Server running on port ${PORT}`));
//console.log('SERVER IN PORT', 3000);


app.listen(process.env.PORT || 5050)
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
console.log("Server running in http://localhost:5050")
