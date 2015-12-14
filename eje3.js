var express=require('express'); 
var app = express(); 
//var port = process.env.PORT || 8080; 

app.use(express.static(__dirname));

app.set('ip', process.env.IP|| '0.0.0.0');
app.set('port', (process.env.PORT || 5000));


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



 app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port') + 'liste adress demand: '+app.get('ip'));
});




 
module.exports = app; 

