var express=require('express'); 
var app = express(); 
//var port = process.env.PORT || 8080; 

app.use(express.static(__dirname));



//Pagina principal
app.get('/', function (req, res) { 
	
	res.send('Bienvenido'); 
}); 
 
 
app.get('/pagina', function (req, res) { 
var pagina='<!doctype html><html><head></head><body>';
	pagina +="Bienvenido";
	pagina += '<a href="index.html">Volver</a>';
	pagina += '</body></html>';
	res.send(pagina); 
}); 

 
app.get('/prueba', function (req, res) { 
	res.send( 'Prueba' ); 
});   

app.post

 
app.listen(3000);



 
module.exports = app; 

