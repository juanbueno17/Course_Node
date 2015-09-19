var express = require('express');
var path = require('path');
var app = express();

// Middlweare de acceso a páginas Web estáticas
//   --> root = directorio 'public'
//   --> __dirname: nombre del directorio de ejecicion
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8000);