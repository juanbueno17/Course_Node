var express = require('express');
var app = express();

// Transaction 1: form load
//   -> GET/form ...
app.get('/form', function(req, res){
	res.send(
	 '<html><body>'
	+	'<form method="get" action="/proc">'
	+		'su nombre: <br>'
	+		'<input type="text" name="user" /><br>'
	+		'<input type="submit" value="Send"/>'
	+	'</form>'
	+'</body></html>');
});

// Transaction 2: shipping and processing of data
//   -> GET /hola?user=Paco ...
app.get('/proc', function(req, res){
	// ...... (the data is processed)
	res.send('Thank you for your data ' + req.query.user);
});
app.listen(8000);