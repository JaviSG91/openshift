var request = require("supertest"); 
var app = require("./eje3.js"); 

 
// Prueba de acceso a la página 
describe('tests', function()  
{ 
	it("Index1", function(done) { 
		request(app) 
			.get("/") 
			.expect("Content-Type", /text\/html/) 
			.expect(200, done); 
	}); 
	it("Index2", function(done) { 
 		request(app) 
 			.get("/pagina") 
			.expect("Content-Type", /text\/html/) 
			.expect(200, done); 
	}); 
	it("Prueba", function(done) { 
 		request(app) 
			.get("/prueba") 
			.expect("Content-Type", /text\/html/) 
			.expect(200, done); 
	}); 
 }); 

