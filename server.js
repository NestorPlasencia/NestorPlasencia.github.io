// REQUERIMIENTO DE MODULOS

var express =  require('express');
var swig = require('swig');
var fs = require('fs');
//CONFIGURACIONES

// Creación del servidor web con express
var server = express();

// Integracion del motor de templates swig
server.engine('html',swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
swig.setDefaults({cache: false});

// Seteo de dirección de carpeta de archivos estaticos
server.use(express.static(__dirname + '/static'));


var info = JSON.parse(fs.readFileSync('Informacion.json', 'utf8'));

// Cuando exista una petición en el servidor  
server.get('/',function(req,res){
	res.render('index.html', {info:info});
});


// INICIAR SERVIDOR
// Se corre el servidor en el puerto 5000
server.listen(process.env.PORT || 5000, function() {
	console.log('El servidor esta escuchando en el puerto '+ 5000)
});