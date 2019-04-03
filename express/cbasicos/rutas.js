var express = require('express');
var app = express();

app.get("/", (req,res)=>{
	res.end("Raiz");
});

app.get("/estudiantes", (req,res)=>{
	res.end("Ruta estudiantes ");
});

app.get("/aulas", (req,res)=>{
	res.end("Ruta para Aulas");
});

app.get("*", (req,res)=>{
	res.end("Not found");
});

app.listen(8000);



