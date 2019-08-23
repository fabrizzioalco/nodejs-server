const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
let error = {
  error: false,
  codigo: 200,
  mensaje: ''
};

let user ={
    nombre:'',
    apellido:''
};

app.get('/', function(req, res){
    respuesta = {
        error:true,
        codigo:200,
        mensaje: 'Punto de inicio'

    };
    res.send(respuesta);
});


app.post('/hola', function(req, res){
    res.send("[POST]Saludos desde express")
});


app.listen(3000, ()=>{
    console.log("El servidor esta inicializando en el puerto 30000");
})