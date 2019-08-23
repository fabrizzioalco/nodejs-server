
//librerias necesarias 
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
let error = {
  error: false,
  codigo: 200,
  mensaje: ''
};
//definimos objetos de usuario
let user ={
    nombre:'',
    apellido:''
};
//get method in root 
app.get('/', function(req, res){
    respuesta = {
        error:true,
        codigo:200,
        mensaje: 'Punto de inicio'

    };
    res.send(respuesta);
});


//Consultamos la base de datos verficando que no sea notacion SQL, asi evitamos ataque SQL injection

// TODO añadir verificacionde texto que no sea SQL

app.get('/usuario', function(req, res){
    //Verificamos que el usuario exista
if(user.nombre== '' && user.apellido == ''){
    respuesta = {
        error: true,
        codigo: 501,
        mensaje: 'El usuario no existe'
    }
}else{
    respuesta= {
        error: false,
        codigo: 200,
        mensaje: "Usuario encontrado",
        

    }
    respuesta = user;
}
res.send(respuesta);
});
//Post 
app.post('/userRegistration', function(req, res){
    if(!req.user.nombre || !req.user.apellido){
        respuesta= {
            error: true,
            codigo: 503,
            mensaje: "Campos requeridos"
        };

    }else{
        respuesta ={
            error: false,
            codigo: 200,
            mensaje: "Loggeado con exito"
        };
    }
    res.send(respuesta);
});


app.post('/hola', function(req, res){
    res.send("[POST]Saludos desde express")
});


app.listen(3000, ()=>{
    console.log("El servidor esta inicializando en el puerto 30000");
})